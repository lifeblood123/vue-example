<template>
  <div id="product-list-two">
    <h2>two</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProduct() {
      var saleProduct = this.$store.state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return saleProduct;
    }
  }
};
</script>
<style>
#product-list-two {
  background: rgb(37, 191, 230);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul {
  padding: 0;
}
#product-list-two li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: blueviolet;
}
</style>