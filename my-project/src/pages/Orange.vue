<template lang="html">
    <div class="banana">
        <h2>{{ msg }}</h2>
        <button type="button" @click="addOne()">添加一个橙子</button>
        <button type="button" @click="reduceOne()">减少一个橙子</button>
    </div>
</template>

<script>
export default {
    name: 'banana',
    data () {
        return {
            msg: '我是橙子a',
            price: 10
        }
    },
    methods: {
        addOne () {
            // 触发mutations
            this.$store.commit({
                type: 'ADD_PRICE',
                price: this.price
            })
        },
        reduceOne () {
            // 触发actions
            this.$store.dispatch('reducePrice', this.price)
        }
    }
}
</script>

<style lang="css">
</style>
