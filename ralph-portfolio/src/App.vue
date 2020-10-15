<template>
  <div class="fixed z-10 inset-1/5">
   <PopUpTransition v-if="isOpen" >
        <consoleWindow > 
          <TheHeader @click="OnCLick"></TheHeader>
           <TheBody>
             <ImageGallery />
           </TheBody>
        </consoleWindow>
    </PopUpTransition>
    </div>
  <div class="relative bg-blue-100 min-h-screen">
    <div class="flex flex-row">
      <DesktopItem title="Tekeningen" action="image" @click="OnClick" ></DesktopItem>
    </div>
 
    <SlideInTransition v-if="openAbout">
      <AboutMe :AboutText="AboutMeText" class="absolute flex flex-row bg-blue-700 bottom-0 mb-10" ></AboutMe>
    </SlideInTransition>
    <footer class="absolute bg-blue-800 h-10 w-screen bottom-0">
      <button class="text-white h-full text-2xl hover:bg-blue-200 hover:text-blue-700 pl-4 pr-4" @click="OnClickAbout">
        Ralph van der Neut
      </button>
    </footer>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import consoleWindow from "@/templates/consoleWindow.vue";
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheBody from "@/components/organisms/TheBody.vue";
import PopUpTransition from "@/components/atoms/PopUpTransition.vue";
import SlideInTransition from "@/components/atoms/SlideInTransition.vue";
import DesktopItem from "@/components/atoms/DesktopItem.vue";
import ImageGallery from "@/components/organisms/ImageGallery.vue";

import AboutMe from "@/components/organisms/AboutMe.vue";

export default defineComponent({
  name: "App",
  components: {
    consoleWindow,
    TheHeader,
    TheBody,
    PopUpTransition,
    SlideInTransition,
    AboutMe,
    DesktopItem,
    ImageGallery
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

    const OnClick = (): void => {
      isOpen.value = !isOpen.value;
    };

    const OnClickAbout = (): void => {
      openAbout.value = !openAbout.value;
    }


    return { OnClick, isOpen,  AboutMeText, OnClickAbout, openAbout };
  },
});
</script>

<style lang="scss">
.move {
  background-color: aliceblue;
  transform: translate(25%, 25%);
}
</style>
