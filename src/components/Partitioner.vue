<template>
  <div>
    <h3>{{ $t('partitioner') }}</h3>
    <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
      <span slot="no-options">{{ $t('selectNoOptions') }}</span>
    </v-select>
    <p v-if="selectedClass != null">{{ $tc('numberStudentInClass', numberOfStudentInClass, { nb: numberOfStudentInClass }) }}</p>
    <v-select class="select" v-model="selectedGroupType" label="type" :options="groupTypes" :placeholder="$t('groupType')">
      <span slot="no-options">{{ $t('selectNoOptions') }}</span>
    </v-select> 

    <span>{{ $t('groupSizes') }}</span>
    <div v-for="(groupSize, index) in groupSizes" :key="index">
      <input type="number" v-model="groupSizes[index]"/>
    </div>
    <button @click="addAGroupSize">+</button>
    <button @click="createGroups">{{ $t('createGroups') }}</button>

    <edit-groups is-creating :group-of-groups="generatedGroups"></edit-groups>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import editGroups from './EditGroups'

export default {
  name: 'Partitioner',
  components: {
    vSelect,
    editGroups
  },
  computed: {
    ...mapState([
      'classes',
      'numberOfStudentInClass',
      'groupTypes', 
      'generatedGroups'
    ])
  },
  data () {
    return {
      selectedClass: null,
      selectedGroupType: null,
      groupSizes: ['']
    }
  },
  methods: {
    addAGroupSize() {
      this.groupSizes.push('')
    },
    createGroups() {
      if (this.selectedGroupType != null) {
        this.$store.dispatch('createGroups', {
          selectedClass: this.selectedClass,
          selectedGroupType: this.selectedGroupType,
          groupSizes: this.groupSizes
        })
      }
    }
  },
  created() {
    this.$store.dispatch('getClasses')
    this.$store.dispatch('getGroupTypes')
  },
  watch: {
    selectedClass: function(newlySelectedClass) {
      if (newlySelectedClass != null) {
        this.$store.dispatch('getNumberOfStudentInClass', {
            selectedClass: newlySelectedClass
          })
      }
    }
  }
}
</script>

<style>
</style>
