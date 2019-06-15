import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马化腾", price: 140 },
            { name: "马冬梅", price: 20 },
            { name: "马容", price: 10 },
        ]
    },
    //一般的改变数据
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map(product => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2
                };


            })
            return saleProducts;
        }
    },
    //MUTATION 触发事件改变数据
    mutations: {


        reducePrice: (state,payload) => {
            //方法已经触发了，但是数据还没有变化，这种方式不好，可以用action
            // setTimeout(function () {
                state.products.forEach(product => {
                    product.price -= payload;
                })

            // }, 3000)

        }

    },
    //action 异步
    actions:{
        reducePrice:(context,payload)=>{
            setTimeout(function(){
                context.commit("reducePrice",payload);


            },3000)
        }

    }

})