<template lang="html">
    <div class="banana">
        <h2>{{ msg }}</h2>
        <button type="button" @click="addOne()">添加一个香蕉</button>
        <button type="button" @click="reduceOne()">减少一个香蕉</button>
        <new-banana />
    </div>
</template>

<script>
import NewBanana from './newBanana'
export default {
    name: 'banana',
    data () {
        return {
            msg: '我是香蕉',
            price: 5
        }
    },
    methods: {
        addOne () {
            // 触发对应的方法
            this.$store.commit({
                type: 'ADD_PRICE',
                price: this.price
            })
        },
        reduceOne () {
            this.$store.commit('REDUCE_PRICE', this.price)
        }
    },
    components: { NewBanana }
}
</script>

<style lang="css">
</style>
