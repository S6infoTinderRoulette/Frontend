<template>
  <div class="main">
    <div style="display: flex;align-items: center;justify-content: center;" class = "bas2Admin">
        <div style="transform: translateY(-50%);width:70%;height:70%;">
            <div class="jumbotron" style="border-radius:10px;background-color:rgba(217,247,247,0.9);padding-top:2rem !important;">
              <h2>{{ $t('matchmaking') }}</h2>
              <div>
                <span>{{$t('nameOfActivity')}} :</span>
                <v-select class="select" v-model="selectedClass" label="idClass" :options="classesOfStudent" :placeholder="$t('classes')">
                  <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                </v-select>
              </div>

              <div v-if="selectedClass != null" style="padding-top: 20px">
                <span>{{$t('activityChosen')}} :</span>
                <v-select class="select" v-model="selectedActivity" label="idActivity" :options="activities" :placeholder="$t('activities')">
                  <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                </v-select>
              </div> 

              <div v-if="selectedClass != null && selectedActivity != null">
                <div v-if="usersTeamMembers.length > 0">
                  <button style="margin-bottom:5px;margin-right:5px;" class="btn btn-primary" v-if="usersTeamMembers.length > 1" @click="leaveTeamPopup()">{{$t('leaveTeam') }}</button>
                  <p>{{ $tc('currentTeam', teamates, { students: teamates }) }}</p>
                </div>

                <div v-if="!isUsersTeamFull" >
                  <p>{{ $tc('numberOfStudentsForActivity', numberOfStudentsForActivity, { nb: numberOfStudentsForActivity }) }}</p>

                  <div style="margin-bottom: 10px">
                    <div v-if="yourRequests.length !=0">
                      <p style="margin: 0px">{{ $t('requests') }}</p>
                      <button style="margin-bottom:5px;margin-right:5px;" class="btn btn-primary" v-for="(request, index) in yourRequests" @click="confirmRequestPopup(request)"
                          :key="'request-' + index">{{request.cipSeeking}}</button>
                    </div>
                    <div v-else>
                      <p>{{ $t('noRequests') }}</p>
                    </div>
                  </div>

                  <table class="table table-striped table-dark">
                    <thead>
                      <tr>
                        <th>Cips</th>
                        <th>Rejoindre l'équipe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(freeGroup, index) in freeGroupsEdited" :key="'freeGroup-' + index">
                        <td>
                          <p style="margin: 0px" v-for="(cip, index1) in freeGroup.cips" :key="'student-' + index1">{{cip}}</p>
                        </td>
                        <td>
                          <button style="margin-bottom:5px;margin-right:5px;" class="btn btn-primary" @click="confirmPopup(freeGroup)">Rejoindre l'équipe</button>
                        </td>
                      </tr>
                      <tr v-for="(freeMember, index) in freeMembers" :key="'freeMember-' + index">
                        <td>{{ freeMember.cip }}</td>
                        <td>
                          <button style="margin-bottom:5px;margin-right:5px;" class="btn btn-primary" @click="confirmPopup(freeMember)">Rejoindre</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'

export default {
  name: 'MatchMaking',
  components: {
    vSelect
  },
  computed: {
    ...mapState([
      'classesOfStudent',
      'activities',
      'numberOfStudentsForActivity',
      'freeGroupsEdited',
      'freeMembers',
      'yourRequests',
      'usersTeamMembers',
      'isUsersTeamFull',
      'membersRequested'
    ]),
    teamates() {
      let teamateString = ''
      let self = this
      this.usersTeamMembers.forEach((teamate, index) => {
        teamateString += index === 0 ? '' : (index === self.usersTeamMembers.length - 1 ? ' et ': ', ')
        teamateString += teamate.cip
      })
      return teamateString
    },
    freeMembersUpdated() {
      return this.freeMembers.filter(val => !this.membersRequested.includes(val.cip))
    },
    freeGroupsUpdated() {
      let groupEdited = this.freeGroupsEdited
      groupEdited.forEach((group) => {
        group.cips.forEach((cip) => {
          if (this.membersRequested.includes(cip)) {
            var index = groupEdited.indexOf(cip);
            groupEdited = groupEdited.splice(index, 1);
          }
        })
      })
      return groupEdited
    }
  },
  data () {
    return{
      selectedClass: null,
      selectedActivity: null,
      numberOfAdditionnalStudents:0,
      options: [
        { id: 0, description:'Étudiants disponibles' },
        { id: 1, description:'Équipes disponibles' }
      ],
      popupOptions: {
          html: false, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
          loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
          reverse: false, // switch the button positions (left to right, and vise versa)
          okText: 'DU COUP oui',
          cancelText: 'EN FAIT non',
          animation: 'zoom', // Available: "zoom", "bounce", "fade"
          type: 'basic', 
          backdropClose: true, // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask 
          customClass: '' // Custom class to be injected into the parent node for the current dialog instance
      }
    }
  },
  methods: {
    confirmPopup (freeMember) {
      let confirmMessage = 'Souhaites-tu te mettre en équipe d\'activité avec ' + freeMember.cip + '?';
      
      let self = this
      this.$dialog.confirm(confirmMessage, this.popupOptions)
        .then(function () {
          self.$store.dispatch('sendRequestTo', {
            cipRequested: freeMember.cip, 
            idActivity: self.selectedActivity.idActivity
          }).then(() => {
            alert ('Demande envoyée')
            self.$store.dispatch('getFreeMembers', {
              selectedActivity: self.selectedActivity
            })
          })
        })
        .catch(function () {

        });
    },
    confirmTeamPopup (freeGroup) {
      let confirmMessage = 'Souhaites-tu te mettre en équipe d\'activité avec ' + freeGroup.cips;
      
      let self = this
      this.$dialog.confirm(confirmMessage, this.popupOptions)
        .then(function () {
          self.$store.dispatch('sendRequestTo', {
            cipRequested: freeGroup.cips[0], 
            idActivity: self.selectedActivity.idActivity
          }).then(() => {
            alert ('Demande envoyée')
            self.$store.dispatch('getFreeGroups', {
              selectedActivity: self.selectedActivity
            })
          })
        })
        .catch(function () {

        });
    },
    confirmRequestPopup (request) {
      let confirmMessage = 'Souhaites-tu te mettre en équipe d\'activité avec ' + request.cipSeeking;
      
      let self = this
      this.$dialog.confirm(confirmMessage, this.popupOptions)
        .then(function () {
          self.$store.dispatch('acceptRequest', {
            cipRequested: request.cipSeeking, 
            idActivity: self.selectedActivity.idActivity
          })
          alert ('Demande acceptée')
        })
        .catch(function () {

        });
    },
    leaveTeamPopup(){
      let confirmMessage = 'Veux-tu quitter ton équipe?';
      
      let self = this
      this.$dialog.confirm(confirmMessage, this.popupOptions)
        .then(function () {
          self.$store.dispatch('leaveTeam', {
            idActivity: self.selectedActivity.idActivity
          })
        })
        .catch(function () {
        });
    }
  },
  created() {
      this.$store.dispatch('getClassesOfStudent')
  },

  watch: {
    selectedClass: function(newlySelectedClass, oldSelectedClass) {
      if (newlySelectedClass != null) {
        if (newlySelectedClass != oldSelectedClass) {
          this.selectedActivity = null
        }
        this.$store.dispatch('getActivities', {
            selectedClass: newlySelectedClass
          })
      }
    },
    selectedActivity: function(newlySelectedActivity) {
      if (newlySelectedActivity != null) {
        Promise.all([
          this.$store.dispatch('getNumberOfStudentsForActivity', {
            selectedActivity: newlySelectedActivity
          }),
          this.$store.dispatch('getRequests'),
          this.$store.dispatch('getTeamMembers', {
            selectedActivity: this.selectedActivity
          }),
          this.$store.dispatch('getFreeMembers', {
            selectedActivity: this.selectedActivity
          }),
          this.$store.dispatch('getFreeGroups', {
            selectedActivity: this.selectedActivity
          }),
          this.$store.dispatch('getRequested', {
            selectedActivity: this.selectedActivity
          })
        ])
      }
    }
  }
}
</script>

<style>

</style>
