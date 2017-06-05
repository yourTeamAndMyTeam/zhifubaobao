<template>
    <div id="app">
        <all-price />
        <hr>
        <banana />
        <hr>
        <orange />
        <hr>
    </div>
</template>

<script>
import AllPrice from './pages/AllPrice'
import Banana from './pages/Banana'
import Orange from './pages/Orange'

export default {
    name: 'app',
    components: {
        AllPrice, Banana, Orange
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
