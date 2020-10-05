<template>
<consoleWindow>
<TheHeader></TheHeader>
<TheBody></TheBody>
</consoleWindow>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import consoleWindow from "@/templates/consoleWindow.vue";
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheBody from "@/components/organisms/TheBody.vue";

export default defineComponent({
  name: 'App',
  components: {
    consoleWindow,
    TheHeader,
    TheBody
  }
});
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
