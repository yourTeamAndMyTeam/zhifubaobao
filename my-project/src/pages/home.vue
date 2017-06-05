<template>
    <div class="home">
        <h1>HOME | 首页</h1>
        <hr>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome home page'
        }
    }
}
</script>

<style>
.home h1 {
    color: hotpink;
    font-size: 100px;
}
</style>
