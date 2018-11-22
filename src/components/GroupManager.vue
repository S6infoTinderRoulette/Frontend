<template>
  <div class="main">
        <div class="basAdmin">
        <h2>{{ $t('groupManager') }}</h2>
        </div>
        
        <div style="display: flex;align-items: center;justify-content: center;" class = "bas2Admin">
            <div style="transform: translateY(-50%);width:70%;height:70%;">
                <div class="jumbotron" style="border-radius:10px;background-color:rgba(217,247,247,0.5);">
                    <div>
                        <p>{{$t('nameOfActivity')}} :</p>
                        <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
                            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                        </v-select>
                    </div>
                    <div style ="margin-top:10px;">
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
                            :idGroupType="selectedGroupType">
                    </edit-groups>
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
    methods: {
        getGroupsOrIndexes(selClass, grpType) {
            if (selClass != null && grpType != null) {
                if (grpType.idGroupType != 3) {
                    this.$store.dispatch('getIndex', {
                        selectedClass: selClass,
                        selectedGroupType: grpType
                    })
                    this.selectedNumActivity = null
                } else {
                    this.$store.dispatch('getGroups', {
                        selectedClass: selClass,
                        selectedGroupType: grpType
                    })
                }
            }
        }
    },
    created() {
        this.$store.dispatch('getClasses')
        this.$store.dispatch('getGroupTypes')
    },
    watch: {
        selectedClass: function(newlySelectedClass) {
            this.getGroupsOrIndexes(newlySelectedClass, this.selectedGroupType)
        },
        selectedGroupType: function(newlySelectedGroupType) {
            this.getGroupsOrIndexes(this.selectedClass, newlySelectedGroupType)
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