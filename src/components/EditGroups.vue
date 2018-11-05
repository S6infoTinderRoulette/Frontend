<template>
    <div>
        <div v-for="(group, index) in groupOfGroups" :key="'group-' + index">
            <p>{{ $tc('numberStudentInGroup', index + 1, group.length, { nbGroup: index + 1, nbStudents : group.length} )}}</p>
            <table>
                <thead>
                    <tr>
                        <th>{{$t('idCip')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <draggable :list="group" :options="{ group:'students' }">
                        <tr v-for="(student, index1) in group" :key="'student-' + index1">
                            <td>{{ student.cip }}</td>
                        </tr>
                    </draggable>
                </tbody>
            </table>
        </div>
        <button @click="saveGroups">{{$t('saveGroups')}}</button>
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
    }
}
</script>

<style>

</style>
