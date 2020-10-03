<template>
  <AnimeSuggestion />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import TeleportMe from "./components/TeleportMe";
// import DeDom from "./components/DeDom";
import AnimeSuggestion from "./components/AnimeSuggestionCompostion";

export default {
  name: "App",
  components: {
    AnimeSuggestion,
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
