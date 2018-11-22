<template>
  <div>
    <navigation-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
export default {
  name: 'App',
  components: {
    NavigationBar
  },
  created () {
    this.$store.dispatch('findSelfStatus')
  }
}
</script>
<style src="@/assets/customStyle.css"></style>
<style src="@/assets/main.css"></style>

