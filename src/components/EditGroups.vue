<template>
    <div>
        <div v-for="(group, index) in groupOfGroups" :key="'group-' + index">
            <p>{{ $tc('numberStudentInGroup', index + 1, group.length, { nbGroup: index + 1, nbStudents : group.length} )}}</p>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>{{$t('idCip')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <draggable class="minheight" :list="group" :options="{ group:'students' }">
                        <tr style="display:block !important;width:99.9% !important ;clear:both !important" v-for="(student, index1) in group" :key="'student-' + index1">
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
            if (this.isCreating) {
                this.$store.dispatch('saveGroups', {
                    groupOfGroups: this.groupOfGroups,
                    idClass: this.idClass.idClass,
                    idGroupType: this.idGroupType.idGroupType
                })
            } else {
                // TODO : updateGroups with groupOfGroups (et les index pls) - pour l'onglet Manage Groups
            }
        }
    },
    watch: {
        groupOfGroups: function(newGroups) {
            this.$store.commit('updateGeneratedGroups', this.groupOfGroups)
        }
    }
}
</script>

<style>

</style>
