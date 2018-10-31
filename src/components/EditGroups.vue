<template>
    <div>
        <div v-for="(group, index) in groupOfGroups" :key="'group-' + index">
            <p>{{ $tc('numberStudentInGroup', nbGroup, nbStudents, { nbGroup: index + 1, nbStudents : group.length} )}}</p>
            <table>
                <thead>
                    <tr>
                        <th>{{$t('idCip')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(student, index1) in group" :key="'student-' + index1">
                        <td>{{ student.cip }}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        <button @click="saveGroups">{{$t('saveGroups')}}</button>
    </div>
</template>

<script>
export default {
    props: {
        groupOfGroups: Array,
        isCreating: Boolean
    },
    methods: {
        saveGroups() {
            if (this.isCreating) {
                // TODO : createGroups with groupOfGroups
            } else {
                // TODO : updateGroups with groupOfGroups (et les index pls)
            }
        }
    }
}
</script>

<style>

</style>
