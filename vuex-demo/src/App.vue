<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProdectListOne from './components/product-list-one.vue'
import ProdectListTwo from './components/product-list-two.vue'

export default {
  name: 'app',
  components:{
    'product-list-one' : ProdectListOne,
    'product-list-two' : ProdectListTwo
  },
  data () {
    return {
      // products:[
      //   {name:"马云",price:200},
      //   {name:"马化腾",price:140},

      //   {name:"马冬梅",price:20},

      //   {name:"马容",price:10},

      // ]
    }
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
