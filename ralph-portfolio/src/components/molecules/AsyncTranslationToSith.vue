

<template>
  <div>
    <input type="text" v-model="query" />
    <button @click="translate">Vertaal</button>
    <span>{{ answer }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Translate } from "../../composables/Translate";


 /* eslint no-var: off */
 export default defineComponent({
  setup() {
    console.log(window);
    if("WebkitSpeechRecognition" in window){
      var recognition = new window.WebkitSpeechRecognition();
    }
    // 
    
    // recognition.lang= "nl";
    // const { TranslateToSith, answer} = Translate();

    // const translate = (): void => {
    //     recognition.start();
    // };

    // recognition.onresult = (event: any) => {
    //     TranslateToSith(event.results[0][0].transcript).then();
    //     //  var x = new window.SpeechSynthesis();
    //     // x.speak(new window.SpeechSynthesisUtterance("hello world")) ;
    // }

    // recognition.onspeechend = () => {
    //     recognition.stop();
    // }

    return { };
  },
});
</script>

<style scoped></style>
