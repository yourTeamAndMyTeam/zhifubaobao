// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'

Vue.config.productionTip = false

// 安装
Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
    state: { // 共享的数据
        money: 0,
        people: [
            { name: 'xiaoming', gender: 'M' },
            { name: 'xiaohong', gender: 'F' },
            { name: 'xiaozhao', gender: 'M' },
        ]
    },
    getters: {
        man (state) {
            return state.people.filter(p => p.gender === 'M')
        }
    },
    mutations: { // 同步执行的方法
        ADD_PRICE (state, { price }) { // 第一个参数为date，后面的参数为传递的数据，此处采用了解构
            state.money += price
            console.log(this);
        },
        REDUCE_PRICE (state, num) {
            state.money -= num
        }
    },
    actions: { // 异步执行的方法
        reducePrice (context, price) { // 第一个参数为context，里面包含commit、dispatch等方法，如果commit使用很多，可以使用{ commit }
            console.log(context);
            setTimeout(function () {
                context.commit('REDUCE_PRICE', price)
            }, 1000);
        }
    }
})


new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
