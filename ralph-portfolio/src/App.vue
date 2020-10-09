<template>
  <div>
    <button @click="OnCLick">hoi</button>
    <PopUpTransition v-if="isOpen">
      <div class="bg-red-700 ml-auto mr-auto h-40 w-40"></div>
    </PopUpTransition>
  </div>
  <!-- <consoleWindow> -->
  <!--
     
      <Modal v-if="isOpen" class=""></Modal>
    </PopUpTransition>
    <TheHeader @click="OnCLick"></TheHeader>
    <TheBody></TheBody>
  </consoleWindow> -->
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
// import consoleWindow from "@/templates/consoleWindow.vue";
// import TheHeader from "@/components/organisms/TheHeader.vue";
// import TheBody from "@/components/organisms/TheBody.vue";
//import Modal from "@/components/molecules/Modal.vue";
import PopUpTransition from "@/components/atoms/PopUpTransition.vue";

export default defineComponent({
  name: "App",
  components: {
    // consoleWindow,
    // TheHeader,
    // TheBody,
    //Modal,
    PopUpTransition,
  },
  setup() {
    const isOpen = ref(false);

    const OnCLick = (): void => {
      isOpen.value = !isOpen.value;
    };

    const Move = computed((): boolean => {
      return isOpen.value;
    });

    return { isOpen, OnCLick, Move };
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

.move {
  background-color: aliceblue;
  transform: translate(25%, 25%);
}
</style>
