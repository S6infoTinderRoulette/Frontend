<template>
    <div style="margin-top: 20px">
        <div v-for="(group, index) in groupOfGroups" :key="'group-' + index">
            <p style="margin-bottom: 0px">{{ $tc('numberStudentInGroup', index + 1, (group.hasOwnProperty('groupStudentList') ? group.groupStudentList : group).length, { nbGroup: index + 1, nbStudents : (group.hasOwnProperty('groupStudentList') ? group.groupStudentList : group).length} )}}</p>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>{{$t('idCip')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <draggable class="minheight" :list="group.hasOwnProperty('groupStudentList') ? group.groupStudentList : group" :options="{ group:'students' }" @end="onEnd">
                        <tr style="display:block !important;width:99.9% !important ;clear:both !important" v-for="(student, index1) in (group.hasOwnProperty('groupStudentList') ? group.groupStudentList : group)" :key="'student-' + index1">
                            <td>{{ student.cip }}</td>
                        </tr>
                    </draggable>
                </tbody>
            </table>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;" >
        <button class = "btn btn-primary btn-large" style = "margin-right: 10px;" @click="addGroup">{{ $t('addGroup') }}</button>
        <button class = "btn btn-primary btn-large" @click="saveGroups">{{ $t('saveGroups') }}</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
    props: {
        groupOfGroups: Array,
        idClass: Object,
        idGroupType: Object,
        isCreating: Boolean
    },
    methods: {
        addGroup() {
            this.groupOfGroups.push([]);
        },
        saveGroups() {
            if (this.idClass !== null && this.idGroupType !== null) {
                if (this.isCreating) {
                    this.$store.dispatch('saveGroups', {
                        groupOfGroups: this.groupOfGroups,
                        idClass: this.idClass.idClass,
                        idGroupType: this.idGroupType.idGroupType
                    })
                } else {
                    this.$store.dispatch('saveUpdatedGroups', {
                        groupOfGroups: this.groupOfGroups,
                        idClass: this.idClass.idClass,
                        idGroupType: this.idGroupType.idGroupType
                    })
                }
            }
        },
        onEnd() {
            this.$store.commit('updateGeneratedGroups', this.groupOfGroups)
        }
    }
}
</script>

<style>

</style>
