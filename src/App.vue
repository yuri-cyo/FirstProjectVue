<template>
      <div class="wrapper">
        <!-- <h1>Header</h1> -->
        <div class="container">
          <Menu></Menu>
          <Page></Page>
        </div>
        <Footer></Footer>
      </div>
  <!-- <ul>
    <li>
      <router-link :to="{name: 'home'}">Home</router-link>
    </li>
    <li>
      <router-link :to="{name: 'about'}">About</router-link>
    </li>
  </ul>
  
  <router-view /> -->
</template>

<script setup>
// import { RouterView, RouterLink } from 'vue-router'
import Menu from './components/Menu.vue';
import Page from './components/Page.vue';
import Footer from './components/Footer.vue';


</script>

<style lang="scss">
@import '@/styles/vars';
.wrapper {
  // max-width: 1575px;
  // margin: 0 auto;
  // border: 1px solid #123412;

  display: flex;
	flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  flex: 1 1 auto;
}


</style>
