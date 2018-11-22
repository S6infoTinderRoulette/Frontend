<template>
    <div class ="sidenav">
        <button class="btn btn-dark buttonside" @click="goTo('/')">{{ $t('partitioner') }}</button>
        <button class="btn btn-dark buttonside" @click="goTo('/matchmaking')">{{ $t('matchmaking') }}</button>
        <button class="btn btn-dark buttonside" @click="goTo('/groupmanager')">{{ $t('groupManager') }}</button>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>
