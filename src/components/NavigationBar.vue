<template>
    <div class ="sidenav">
        <button v-if="!isStudent && hasLoaded" class="btn btn-dark buttonside" @click="goTo('/')">{{ $t('partitioner') }}</button>
        <button v-if="isStudent && hasLoaded" class="btn btn-dark buttonside" @click="goTo('/matchmaking')">{{ $t('matchmaking') }}</button>
        <button v-if="!isStudent && hasLoaded" class="btn btn-dark buttonside" @click="goTo('/groupmanager')">{{ $t('groupManager') }}</button>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    computed: {
        isStudent() {
            return this.$store.state.selfStatus === 1
        },
        hasLoaded() {
            return this.$store.state.selfStatus !== 0
        }
    },
    methods: {
        goTo(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>
