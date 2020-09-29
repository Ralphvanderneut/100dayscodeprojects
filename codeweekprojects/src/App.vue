<template>
  <img alt="Vue logo" src="./assets/logo.png" v-show="false" />
  <HelloWorld msg="Welcome to Your Vue.js App" v-show="false" />
  <TeleportMe v-show="false"></TeleportMe>
  <DeDom />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TeleportMe from "./components/TeleportMe";
import DeDom from "./components/DeDom";
export default {
  name: "App",
  components: {
    HelloWorld,
    TeleportMe,
    DeDom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
