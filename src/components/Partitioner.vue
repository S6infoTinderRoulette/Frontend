<template>
  <div class="main">
    <div class="basAdmin">
    <h2>{{ $t('activityPartitioner') }}</h2>
    </div>
    <div style="display: flex;align-items: center;justify-content: center;" class = "bas2Admin">
      <div style="transform: translateY(-50%);width:70%;height:70%;">
        <div class="jumbotron" style="border-radius:10px;background-color:rgba(217,247,247,0.5);">
          
          <div>
            <p>{{$t('nameOfActivity')}} :</p>
            <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
              <span slot="no-options">{{ $t('selectNoOptions') }}</span>
            </v-select>
            <p v-if="selectedClass != null">{{ $tc('numberStudentInClass', numberOfStudentInClass, { nb: numberOfStudentInClass }) }}</p>
          </div>

          <div style ="margin-top:10px;">
            <p>{{$t('TypeOfActivity')}} :</p>
            <v-select class="select" v-model="selectedGroupType" label="type" :options="groupTypes" :placeholder="$t('groupType')">
              <span slot="no-options">{{ $t('selectNoOptions') }}</span>
            </v-select> 
          </div>

          <div style = "margin-top:20px;">
          <div v-for="pill in pills" :key="'pill-' + pill.id">
            <input type="radio"  v-model="selectedPillId" :value="pill.id" >{{ pill.description}}
          </div>
            <p style = "margin-top:20px;" v-if="selectedPillId==0">{{ $tc('defaultNumberOfGroupSize', defaultNumberOfGroupSize, { nb: defaultNumberOfGroupSize }) }}</p>
          </div>

          <div v-if="selectedPillId==1">
            <p>{{$t('newGroupSize')}} :</p>
            <b-form-input type="number" min="0.00" v-model="newDefaultGroupSize"></b-form-input>
          </div> 

          <div v-if="selectedPillId==2">
            <span>{{ $t('groupSizes') }}</span>
            <div v-for="(groupSize, index) in groupSizes" :key="index">
              <div>
                <b-input-group>

                  <b-form-input type="number" min="0.00" v-model="groupSizes[index]"></b-form-input>

                  <b-input-group-append>
                    <b-btn variant="outline-secondary" @click="removeSize(index)" >x</b-btn>
                    <b-btn variant="outline-secondary" @click="addAGroupSize">+</b-btn>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:center;align-items:center;margin-top:10px;" >
            <button class ="btn btn-primary btn-large" style="display:flex;justify-content:center;align-items:center;" @click="createGroups">{{ $t('createGroups') }}</button>
          </div>
              <edit-groups v-if="isGroupCreated" 
                is-creating 
                :group-of-groups="generatedGroups"
                :idClass="selectedClass"
                :idGroupType="selectedGroupType"></edit-groups>

        </div>
      </div>
    </div>
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
    removeSize(index) {
      this.groupSizes.splice(index, 1)
    },
    addAGroupSize() {
      this.groupSizes.push('')
    },
    createGroups() {
      if (this.selectedGroupType != null && this.selectedClass != null) {
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
