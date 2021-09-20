<script>
import Test from './views/Test.vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default {
  components: { Test },

}
</script>

<template>
  <div> 
    <h2>fasfdsa</h2>

    <test></test>
    <router-link to="/r1">r1</router-link>
    <router-link to='/r2'>r2</router-link>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
