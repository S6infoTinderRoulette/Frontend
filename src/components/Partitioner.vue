<template>
  <div>
    <h3>{{ $t('partitioner') }}</h3>
    <v-select class="select" v-model="selectedClass" label="name" :options="classes" :placeholder="$t('classes')"></v-select>
    <v-select class="select" v-model="selectedGroupType" label="name" :options="groupTypes" :placeholder="$t('groupType')"></v-select>
    <span>{{ $t('groupSizes') }}</span>
    <div v-for="(groupSize, index) in groupSizes" :key="index">
      <input type="number" v-model="groupSizes[index]"/>
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
      'classes',
      'groupTypes'
    ])
  },
  data () {
    return {
      selectedClass: null,
      selectedGroupType: null,
      groupSizes: ['']
    }
  },
  methods: {
    addAGroupSize() {
      this.groupSizes.push('')
    },
    createGroups() {
      if (this.selectedGroupType != null) {
        alert(`Groupes de ${this.selectedGroupType.name} créés.`)
      }
    }
  },
  created() {
    this.$store.dispatch('getClasses', 'getGroupTypes')
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
