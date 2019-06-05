<template>
  <div class="card text-dark bg-light md-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">1304938824@qq.com</p>
      <router-link tag="div" :to="{name:'personName'}">
        <a class="list-group-item list-group-item-action">联系人姓名</a>
      </router-link>
      <router-link tag="div" :to="{name:'phoneNumber'}">
        <a class="list-group-item list-group-item-action">联系人电话</a>
      </router-link>
    </div>
    <router-view class="col-8"></router-view>
  </div>
</template>
