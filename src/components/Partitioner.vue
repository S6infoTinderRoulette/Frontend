<template>
  <div>
    <h2>{{ $t('activityPartitioner') }}</h2>
    <div>
      <p>{{$t('nameOfActivity')}} :</p>
      <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select>
      <p v-if="selectedClass != null">{{ $tc('numberStudentInClass', numberOfStudentInClass, { nb: numberOfStudentInClass }) }}</p>
    </div>
    <div>
      <p>{{$t('TypeOfActivity')}} :</p>
      <v-select class="select" v-model="selectedGroupType" label="type" :options="groupTypes" :placeholder="$t('groupType')">
        <span slot="no-options">{{ $t('selectNoOptions') }}</span>
      </v-select> 
    </div>

    <div v-for="pill in pills" :key="'pill-' + pill.id">
      <input type="radio"  v-model="selectedPillId" :value="pill.id" >{{ pill.description}}
    </div>
    <p v-if="selectedPillId==0">{{ $tc('defaultNumberOfGroupSize', defaultNumberOfGroupSize, { nb: defaultNumberOfGroupSize }) }}</p>


    <div v-if="selectedPillId==1">
      <p>{{$t('newGroupSize')}} :</p>
      <input type="number" min="0" v-model="newDefaultGroupSize">
    </div>

    <div v-if="selectedPillId==2">
      <span>{{ $t('groupSizes') }}</span>
      <div v-for="(groupSize, index) in groupSizes" :key="index">
        <input type="number" min="0" v-model="groupSizes[index]"/>
      </div>
      <button @click="addAGroupSize">+</button>
    </div>

    <button @click="createGroups">{{ $t('createGroups') }}</button>

    <edit-groups v-if="isGroupCreated" 
                is-creating 
                :group-of-groups="generatedGroups"
                :idClass="selectedClass"
                :idGroupType="selectedGroupType"></edit-groups>
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
      'defaultNumberOfGroupSize',
      'generatedGroups'
    ]),
    isGroupCreated () {
      return this.generatedGroups !== undefined && this.generatedGroups.length !== 0
    } 
  },
  data () {
    return {
      selectedClass: null,
      selectedGroupType: null,
      groupSizes: [''],
      newDefaultGroupSize: null,
      pills: [
        { id: 0, description: 'Taille de groupes par défaut'},
        { id: 1, description: 'Changer la taille de groupes par défaut'},
        { id: 2, description: 'Personnaliser'}
      ],
      selectedPillId: 0
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
          newDefaultGroupSize: this.selectedPillId === 1 ? this.newDefaultGroupSize : null,
          groupSizes: this.selectedPillId === 2 ? this.groupSizes : null
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
    },
    selectedGroupType: function(newlySelectedGroupType){
      if(newlySelectedGroupType != null){
        this.$store.dispatch('getDefaultNumberOfGroupSize', {
          selectedGroupType:newlySelectedGroupType
        })
      }
    }
  }
  
}
</script>

<style>
</style>
