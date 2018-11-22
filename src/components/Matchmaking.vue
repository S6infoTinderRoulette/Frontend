<template>
  <div>
    <h2>{{ $t('matchmaking') }}</h2>
    <div>
      <p>{{$t('nameOfActivity')}} :</p>
      <v-select class="select" v-model="selectedClass" label="idClass" :options="classesOfStudent" :placeholder="$t('classes')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select>
    </div>
    <div v-if="selectedClass != null">
      <p>{{$t('activityChosen')}} :</p>
      <v-select class="select" v-model="selectedActivity" label="idActivity" :options="activities" :placeholder="$t('activities')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select>
    </div> 

    <div v-if="selectedClass != null && selectedActivity != null">
      <div>
        <button v-if="usersTeamMembers.length > 1" @click="leaveTeamPopup()">{{$t('leaveTeam') }}</button>
        <p>{{ $tc('currentTeam', teamates, { students: teamates }) }}</p>
      </div>

      <div v-if="!isUsersTeamFull" >
        <p>{{ $tc('numberOfStudentsForActivity', numberOfStudentsForActivity, { nb: numberOfStudentsForActivity }) }}</p>
        <p>{{ $tc('numberOfAdditionnalStudents', numberOfAdditionnalStudents, { nb: numberOfAdditionnalStudents = this.numberOfStudentsForActivity - this.usersTeamMembers.length }) }}</p>

        <div v-for="option in options" :key="'option-' + option.id">
          <input type="radio"  v-model="selectedOption" :value="option.id" >{{ option.description}}
        </div>
        
        <div v-if="selectedOption == 0">
        <button v-for="(freeMember, index) in freeMembers" @click="confirmPopup(freeMember)"
              :key="'freeMember-' + index">{{freeMember.cip}}</button>
        </div>
      
        <div v-if="selectedOption == 1" v-for="(freeGroup, index) in freeGroupsEdited" :key="'freeGroup-' + index">
          <button @click="confirmTeamPopup(freeGroup)">{{freeGroup.idGroup}}</button>
          <p v-for="(cip, index1) in freeGroup.cips" :key="'student-' + index1">{{cip}}</p>
        </div>

        <div v-if="yourRequests.length !=0">
          <p>{{$t('requests')}}</p>
          <button v-for="(request, index) in yourRequests" @click="confirmRequestPopup(request)"
              :key="'request-' + index">{{request.cipSeeking}}</button>
        </div>
        <div v-else>
          <p>{{$t('noRequests')}}</p>
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
      'isUsersTeamFull'
    ]),
    teamates() {
      let teamateString = ''
      let self = this
      this.usersTeamMembers.forEach((teamate, index) => {
        teamateString += index === 0 ? '' : (index === self.usersTeamMembers.length - 1 ? ' et ': ', ')
        teamateString += teamate.cip
      })
      return teamateString
    }
    },
  data () {
    return{
      selectedClass: null,
      selectedActivity: null,
      selectedOption: 0,
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
          })
          alert ('Demande envoyée')
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
          })
          alert ('Demande envoyée')
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
    selectedClass: function(newlySelectedClass){
      if (newlySelectedClass != null){
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
          })
        ])
      }
    }
  }
}
</script>

<style>

</style>
