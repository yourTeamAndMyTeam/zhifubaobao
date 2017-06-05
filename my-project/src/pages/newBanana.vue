<template lang="html">
    <div class="new-banana">
        <h2>{{ msg }}</h2>
        <button @click="buy()">买一根{{ msg }}</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: '进口的香蕉'
        }
    },
    methods: {
        buy () {
            this.$store.commit({
                type: 'ADD_PRICE',
                price: 100
            })
        }
    }
}
</script>

<style lang="css">
</style>
