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
      'numberOfStudentsForActivity'
    ]) 
  },
  data () {
    return{
      selectedClass: null,
      selectedActivity: null
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
    }
  }
}


</script>

<style>

</style>
