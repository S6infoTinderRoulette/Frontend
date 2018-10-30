<template>
    <div>
        <h3>EditGroups Component</h3>
        <div v-for="(group, index) in groupOfGroups" :key="'group-' + index">
            <p>Groupe {{ index + 1 }}</p>
            <div v-for="(student, index1) in group" :key="'student-' + index1">
                {{ student.cip }}
            </div>
        </div>
        <button @click="saveGroups">Sauvegarder les groupes</button>
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
