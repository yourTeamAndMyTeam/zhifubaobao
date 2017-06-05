<template lang="html">
    <div class="all-price">
        <h1>总金额: {{ totoalPrice }}</h1>
        <ul>
            <li v-for="p in man">{{ p.name + ' ' + p.gender }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        totoalPrice () {
            return this.$store.state.money
        },
        man () {
            return this.$store.getters.man
        }
    }
}
</script>

<style lang="css">
</style>
