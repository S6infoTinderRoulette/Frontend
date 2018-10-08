<template>
  <div>
    <h3>Partitioner</h3>
    <v-select class="select" v-model="selectedGroupType" label="name" :options="groupTypes" placeholder="Type de groupe">

    </v-select>
    <button @click="createGroups">Create groups</button>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'Partitioner',
  components: {
    vSelect
  },
  data () {
    return {
      selectedGroupType: null,
      groupTypes: [
        { id: 2, name: 'Tutorat' },
        { id: 3, name: 'Procédural' },
        { id: 4, name: 'Projet' }
      ]
    }
  },
  methods: {
    createGroups() {
      if (this.selectedGroupType != null) {
        alert(`Groupes de ${this.selectedGroupType.name} créés.`)
      }
    }
  }
}
</script>

<style>

</style>
