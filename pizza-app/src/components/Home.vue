<template>
    <div>
        <h1>Home</h1>
        <button @click="goToMenu" class="btn btn-success">Let's order</button>
    </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){
            //上一次浏览的页面
            this.$router.go(-1);
            //每次跳转的位置
             this.$router.replace('/menu');
        }
    }
}
</script>
