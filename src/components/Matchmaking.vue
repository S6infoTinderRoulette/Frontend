<template>
  <div>
    <h2>{{ $t('matchmaking') }}</h2>
    <div>
      <p>{{$t('nameOfActivity')}} :</p>
      <v-select class="select" v-model="selectedClass" label="idClass" :options="classesOfStudent" :placeholder="$t('classes')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select>
      <p>{{$t('activityChosen')}} :</p>
      <v-select class="select" v-model="selectedActivity" label="idActivity" :options="activities" :placeholder="$t('activities')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select>
      <p v-if="selectedActivity != null">{{ $tc('numberOfStudentsForActivity', numberOfStudentsForActivity, { nb: numberOfStudentsForActivity }) }}</p>
    </div>  
    <div v-if="selectedActivity != null && numberOfStudentsForActivity > 2" v-for="option in options" :key="'option-' + option.id">
      <input type="radio"  v-model="selectedOption" :value="option.id" >{{ option.description}}
    </div>
    <div v-if="selectedOption == 0" v-for="(freeGroup, index) in freeGroupsEdited" :key="'freeGroup-' + index">
      <button>{{freeGroup.idGroup}}</button>
      <tr v-for="(cip, index1) in freeGroup.cips" :key="'student-' + index1">{{cip}}</tr>
    </div>
    <tr v-if="selectedOption == 1">
      <button v-for="(freeMember, index) in freeMembers" @click="confirmPopup(freeMember)"
            :key="'freeMember-' + index">{{freeMember.cip}}</button>
    </tr>
    
   

  </div>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'
export default {
  name: 'Matchmaking',
  components: {
    vSelect
  },
  computed: {
    ...mapState([
      'classesOfStudent',
      'activities',
      'numberOfStudentsForActivity',
      'freeGroupsEdited',
      'freeMembers'
    ]) 
  },

  data () {
    return{
      selectedClass: null,
      selectedActivity: null,
      selectedOption:null,
      options: [
        {id: 0, description:'Equipes dispos'},
        {id: 1, description:'Etudiants dispos'}
      ],
    }
  },
  methods: {
    confirmPopup (freeMember) {
      let confirmMessage = 'Valide ton choix: tu veux tu etre en APP avec ' + freeMember.cip;
      
      let popupOptions = {
          html: false, // set to true if your message contains HTML tags. eg: "Delete <b>Foo</b> ?"
          loader: false, // set to true if you want the dailog to show a loader after click on "proceed"
          reverse: false, // switch the button positions (left to right, and vise versa)
          okText: 'DU COUP oui',
          cancelText: 'EN FAIT non',
          animation: 'zoom', // Available: "zoom", "bounce", "fade"
          type: 'basic', 
          backdropClose: true, // set to true to close the dialog when clicking outside of the dialog window, i.e. click landing on the mask 
          customClass: '' // Custom class to be injected into the parent node for the current dialog instance
      };
      let self = this
      this.$dialog.confirm(confirmMessage, popupOptions)
        .then(function () {
          self.$store.dispatch('sendRequestTo', {
            cipRequested: freeMember.cip, 
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
        this.$store.dispatch('getNumberOfStudentsForActivity', {
            selectedActivity: newlySelectedActivity
          })
      }
    },
    selectedOption: function(newlySelectedOption) {
      if (newlySelectedOption != null){
        if(newlySelectedOption == 0) {
        this.$store.dispatch('getFreeGroups', {
            selectedActivity: this.selectedActivity
          })
        }
        else{
          this.$store.dispatch('getFreeMembers', {
            selectedActivity: this.selectedActivity
          })
        }
      }
    }
  }
}


</script>

<style>

</style>
