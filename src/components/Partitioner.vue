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
        this.$store.dispatch('createGroups', {
          selectedClass: this.selectedClass,
          selectedGroupType: this.selectedGroupType,
          groupSizes: this.groupSizes
        })
      }
    }
  },
  created() {
    this.$store.dispatch('getClasses', 'getGroupTypes')
  }
}
</script>

<style>
</style>
