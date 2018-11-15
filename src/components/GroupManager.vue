<template>
    <div>
        <h2>{{ $t('groupManager') }}</h2>
        <div>
        <p>{{$t('nameOfActivity')}} :</p>
        <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
        </v-select>
        </div>
        <div>
        <p>{{$t('TypeOfActivity')}} :</p>
        <v-select class="select" v-model="selectedGroupType" label="type" :options="groupTypes" :placeholder="$t('groupType')">
            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
        </v-select> 
        </div>
        <div v-if="(selectedGroupType !=null && selectedGroupType.idGroupType != 3)"> 
            <p>{{$t('numActivity')}} :</p>
            <v-select class="select" v-model="selectedNumActivity" label="type" :options="numActivityList" :placeholder="$t('numActivityList')">
            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
        </v-select> 
        </div>
        <edit-groups v-if="isGroupCreated"
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
    name: 'GroupManager',
    components: {
        vSelect,
        editGroups
    },
    computed: {
        ...mapState([
        'classes',
        'groupTypes',
        'generatedGroups',
        'numActivityList'
        ]),
        isGroupCreated () {
            return this.generatedGroups !== undefined && this.generatedGroups.length !== 0
        } 
    },
    data () {
        return {
            selectedClass: null,
            selectedGroupType: null,
            selectedNumActivity: null
        }
    },
    created() {
        this.$store.dispatch('getClasses')
        this.$store.dispatch('getGroupTypes')
    },
    watch: {
    selectedClass: function(newlySelectedClass) {
        if (newlySelectedClass != null && this.selectedGroupType != null) {
             if(this.selectedGroupType.idGroupType != 3){
                 this.$store.dispatch('getIndex', {
                    selectedClass: newlySelectedClass,
                    selectedGroupType: this.selectedGroupType
                })
                this.selectedNumActivity = null
             }else{
                this.$store.dispatch('getGroups', {
                    selectedClass: newlySelectedClass,
                    selectedGroupType: this.selectedGroupType
                })
             }
        }
    },
    selectedGroupType: function(newlySelectedGroupType){
      if(newlySelectedGroupType != null && this.selectedClass != null){
          if(newlySelectedGroupType.idGroupType != 3){
            this.$store.dispatch('getIndex', {
                selectedGroupType: newlySelectedGroupType,
                selectedClass: this.selectedClass,
            })
            this.selectedNumActivity = null
          }else{
            this.$store.dispatch('getGroups', {
                selectedGroupType: newlySelectedGroupType,
                selectedClass: this.selectedClass,
            })
          }
      }
    },
    selectedNumActivity: function(newlySelectedNumActivity){
        this.$store.dispatch('getGroupsWithIndex', {
                selectedGroupType: this.selectedGroupType,
                selectedClass: this.selectedClass,
                selectedIndex: newlySelectedNumActivity
        })
    }
  }
}
</script>

<style>

</style>