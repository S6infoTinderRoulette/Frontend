<template>
  <div class="main">        
        <div style="display: flex;align-items: center;justify-content: center;" class = "bas2Admin">
            <div style="transform: translateY(-50%);width:70%;height:70%;">
                <div class="jumbotron" style="border-radius:10px;background-color:rgba(217,247,247,0.9);padding-top:2rem !important;">
                    <h2>{{ $t('groupManager') }}</h2>
                    <div>
                        <span>{{$t('nameOfActivity')}} :</span>
                        <v-select class="select" v-model="selectedClass" label="idClass" :options="classes" :placeholder="$t('classes')">
                            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                        </v-select>
                    </div>
                    <div style ="margin-top:10px;">
                        <span>{{$t('TypeOfActivity')}} :</span>
                        <v-select class="select" v-model="selectedGroupType" label="type" :options="groupTypes" :placeholder="$t('groupType')">
                            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                        </v-select> 
                    </div>
                    <div style ="margin-top:10px;" v-if="isIndexShown"> 
                        <span>{{$t('numActivity')}} :</span>
                        <v-select class="select" v-model="selectedNumActivity" label="type" :options="numActivityList" :placeholder="$t('numActivityList')">
                            <span slot="no-options">{{ $t('selectNoOptions') }}</span>
                        </v-select> 
                    </div>
                    <edit-groups v-if="isGroupCreated"
                            :group-of-groups="importedGroups"
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
        'importedGroups',
        'numActivityList'
        ]),
        isGroupCreated () {
            return this.importedGroups !== undefined && this.importedGroups.length !== 0
        },
        isIndexShown() {
            return this.selectedGroupType !=null && this.selectedGroupType.idGroupType != 3
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
        },
        resetGroups(selClass, selGroupType, selIndex) {
            if (selClass === null || selGroupType === null || (this.isIndexShown && selIndex === null)) {
                this.$store.commit('updateImportedGroups', [])
            }
        }
    },
    created() {
        this.$store.dispatch('getClasses')
        this.$store.dispatch('getGroupTypes')
    },
    beforeDestroy: function () {
        this.$store.commit('updateImportedGroups', [])
    },
    watch: {
        selectedClass: function(newlySelectedClass) {
            this.getGroupsOrIndexes(newlySelectedClass, this.selectedGroupType)
            this.resetGroups(newlySelectedClass, this.selectedGroupType, this.selectedNumActivity)
        },
        selectedGroupType: function(newlySelectedGroupType) {
            this.getGroupsOrIndexes(this.selectedClass, newlySelectedGroupType)
            this.resetGroups(this.selectedClass, newlySelectedGroupType, this.selectedNumActivity)
        },
        selectedNumActivity: function(newlySelectedNumActivity) {
            if (newlySelectedNumActivity !== null) {
                this.$store.dispatch('getGroupsWithIndex', {
                        selectedGroupType: this.selectedGroupType,
                        selectedClass: this.selectedClass,
                        selectedIndex: newlySelectedNumActivity
                })
            }
            this.resetGroups(this.selectedClass, this.selectedGroupType, newlySelectedNumActivity)
        }
    }
}
</script>

<style>

</style>