<template>
  <consoleWindow>
    <Transition>
      <Modal v-if="isOpen" class=""></Modal>
    </Transition>
    <TheHeader @click="OnCLick"></TheHeader>
    <TheBody></TheBody>
  </consoleWindow>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import consoleWindow from "@/templates/consoleWindow.vue";
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheBody from "@/components/organisms/TheBody.vue";
import Modal from "@/components/molecules/Modal.vue";
import Transition from "@/components/atoms/Transition.vue";

export default defineComponent({
  name: "App",
  components: {
    consoleWindow,
    TheHeader,
    TheBody,
    Modal,
    Transition,
  },
  setup() {
    const isOpen = ref(false);

    const OnCLick = (): void => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, OnCLick };
  },
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
