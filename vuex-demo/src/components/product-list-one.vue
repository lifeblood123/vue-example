<template>
    <div id="product-list-one">
        <h2>one</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>
        <button @click="reducePrice(6)">商品降价</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  computed:{
      products(){
          return this.$store.state.products
      },
      ...mapGetters([
          "saleProducts"

      ])
    //   saleProducts(){
    //       return this.$store.getters.saleProducts;
    //   }
  },
  methods:{

        
    //method 1 mutation
    //   reducePrice : function(){
    //       this.$store.commit('reducePrice');

    //   }


    //method 2
    //   reducePrice : function(){
    //       this.$store.state.products.forEach(product=>{
    //           product.price -= 1;
    //       })
    //   }
      
    //method 3 actions
    reducePrice:function(amount){
        this.$store.dispatch("reducePrice",amount);
    }
  }
}
</script>
<style scoped>
#product-list-one
{
    background:#FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom:30px;
    padding:10px 20px;
}
#product-list-one ul{
    padding:0;
}
#product-list-one li{
    display: inline-block;
    margin-right:10px;
    margin-top:10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight:bold;
    color:#E8800c;
}
</style>


