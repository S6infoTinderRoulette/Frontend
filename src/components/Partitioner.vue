<template>
  <div>
    <h3>Partitioner</h3>
    <v-select class="select" v-model="selectedGroupType" label="name" :options="groupTypes" placeholder="Type de groupe">
    </v-select>
    <button @click="createGroups">Create groups</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'

export default {
  name: 'Partitioner',
  components: {
    vSelect
  },
  computed: mapState([
    'groupTypes'
  ]),
  data () {
    return {
      selectedGroupType: null
    }
  },
  methods: {
    createGroups() {
      if (this.selectedGroupType != null) {
        alert(`Groupes de ${this.selectedGroupType.name} créés.`)
      }
    }
  },
  created() {
    this.$store.dispatch('getGroupTypes')
  }
}
</script>

<style>

</style>
