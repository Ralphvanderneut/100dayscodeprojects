<template>
  <div class="relative bg-blue-100 min-h-screen">
    <button @click="OnCLick">hoi</button>
    <PopUpTransition v-if="isOpen">
      <div class="bg-red-700 ml-auto mr-auto h-40 w-40"></div>
    </PopUpTransition>

    <AboutMe :AboutText="AboutMeText" class="absolute flex flex-row bg-blue-700 bottom-0 mb-10"></AboutMe>
    <footer class="absolute bg-blue-800 h-10 w-screen bottom-0">
      <button class="text-white h-full text-2xl hover:bg-blue-200 hover:text-blue-700 pl-4 pr-4" @click="OpenAbout">
        Ralph van der Neut
      </button>
    </footer>
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
import { defineComponent, ref, computed, reactive } from "vue";
// import consoleWindow from "@/templates/consoleWindow.vue";
// import TheHeader from "@/components/organisms/TheHeader.vue";
// import TheBody from "@/components/organisms/TheBody.vue";
//import Modal from "@/components/molecules/Modal.vue";
import PopUpTransition from "@/components/atoms/PopUpTransition.vue";
import AboutMe from "@/components/organisms/AboutMe.vue";

export default defineComponent({
  name: "App",
  components: {
    // consoleWindow,
    // TheHeader,
    // TheBody,
    //Modal,
    PopUpTransition,
    AboutMe
  },
  setup() {
    const isOpen = ref(false);
    const AboutMeText = ref([
      {header : "Naam" , lines: [ "Ralph van der Neut" ] },
      {header : "Languages" , lines: ["C#" , "javascript" ] },
      {header : "Hobbies" , lines:["Boxing" , "Running", "Drawing"] },
      {header : "Hates" , lines: ["SQL" , "What if mentality" ] },
      ])

    const OnCLick = (): void => {
      isOpen.value = !isOpen.value;
    };

    const Move = computed((): boolean => {
      return isOpen.value;
    });

    return { isOpen, OnCLick, Move, AboutMeText };
  },
});
</script>

<style lang="scss">
.move {
  background-color: aliceblue;
  transform: translate(25%, 25%);
}
</style>
