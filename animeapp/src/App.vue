<template>
  <AnimeSuggestion />
</template>

<script lang="ts">
import AnimeSuggestion from "@/components/AnimeSuggestion.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    AnimeSuggestion,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
