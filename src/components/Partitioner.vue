<template>
  <div>
    <h3>{{ $t('partitioner') }}</h3>
    <v-select class="select" v-model="selectedGroupType" label="name" :options="groupTypes" :placeholder="$t('groupType')">
    </v-select>
    <div v-for="(groupSize, index) in groupSizes" :key="index">
      <input type="number" v-model="groupSize.value"/>
    </div>
    <button @click="addAGroupSize">+</button>
    <button @click="createGroups">{{ $t('createGroups') }}</button>
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
  computed: {
    ...mapState([
      'groupTypes'
    ])
  },
  data () {
    return {
      selectedGroupType: null,
      groupSizes: [{ value: '' }]
    }
  },
  methods: {
    addAGroupSize() {
      this.groupSizes.push({ value: '' })
    },
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
.select input{
    border-bottom: none !important;
    height: 34px !important;
    margin: 0 0 0 8px !important;
    padding: 0 !important;
    font-size: 14px !important;
}
</style>
