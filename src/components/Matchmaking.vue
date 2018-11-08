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
      <button v-for="(freeMember, index) in freeMembers" :key="'freeMember-' + index">{{freeMember.cip}}</button>
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
