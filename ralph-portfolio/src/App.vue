<template>
  <div class="relative bg-blue-100 min-h-screen">
    <DesktopItem title="Tekeningen"></DesktopItem>
    <PopUpTransition v-if="isOpen">
      <div class="bg-red-700 ml-auto mr-auto h-40 w-40"></div>
    </PopUpTransition>
    <SlideInTransition v-if="openAbout">
      <AboutMe :AboutText="AboutMeText" class="absolute flex flex-row bg-blue-700 bottom-0 mb-10" ></AboutMe>
    </SlideInTransition>
    
    <footer class="absolute bg-blue-800 h-10 w-screen bottom-0">
      <button class="text-white h-full text-2xl hover:bg-blue-200 hover:text-blue-700 pl-4 pr-4" @click="OnClickAbout">
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
import { defineComponent, ref, computed } from "vue";
// import consoleWindow from "@/templates/consoleWindow.vue";
// import TheHeader from "@/components/organisms/TheHeader.vue";
// import TheBody from "@/components/organisms/TheBody.vue";
//import Modal from "@/components/molecules/Modal.vue";
import PopUpTransition from "@/components/atoms/PopUpTransition.vue";
import SlideInTransition from "@/components/atoms/SlideInTransition.vue";
import DesktopItem from "@/components/atoms/DesktopItem.vue";


import AboutMe from "@/components/organisms/AboutMe.vue";

export default defineComponent({
  name: "App",
  components: {
    // consoleWindow,
    // TheHeader,
    // TheBody,
    //Modal,
    PopUpTransition,
    SlideInTransition,
    AboutMe,
    DesktopItem
  },
  setup() {
    const isOpen = ref(false);
    const openAbout = ref(false);

    const AboutMeText = ref([
      {header : "Naam" , lines: [ "Ralph van der Neut" ] },
      {header : "Languages" , lines: ["C#" , "javascript" ] },
      {header : "Hobbies" , lines:["Boxing" , "Running", "Drawing"] },
      {header : "Hates" , lines: ["SQL" , "What if mentality" ] },
      ])

    const OnCLick = (): void => {
      isOpen.value = !isOpen.value;
    };

    const OnClickAbout = (): void => {
      openAbout.value = !openAbout.value;
    }

    const Move = computed((): boolean => {
      return isOpen.value;
    });

    return { isOpen, OnCLick, Move, AboutMeText, OnClickAbout, openAbout };
  },
});
</script>

<style lang="scss">
.move {
  background-color: aliceblue;
  transform: translate(25%, 25%);
}
</style>
