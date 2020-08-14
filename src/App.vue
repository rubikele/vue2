<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
//引入两个组件
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import TypeNav from '@/components/TypeNav';
export default {
  name: "App",
  components: {
    Header,
    Footer,
   
  },
};
</script>

<style></style>
