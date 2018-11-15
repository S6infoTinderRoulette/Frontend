<template>
    <div>
        <router-link :to="{ name: 'Partitioner'}">{{ $t('partitioner') }}</router-link>
        <router-link to="/matchmaking">{{ $t('matchmaking') }}</router-link>
        <router-link to="/groupmanager">{{ $t('groupManager') }}</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
