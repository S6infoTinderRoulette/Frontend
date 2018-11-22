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
    const self = this
    this.$store.dispatch('findSelfStatus')
      .then(response => {
        if (response.data == 1) {
          this.$router.push('/matchmaking')
        } else {
          this.$router.push('/')
        }
      })
  }
}
</script>
<style src="@/assets/customStyle.css"></style>
<style src="@/assets/main.css"></style>

