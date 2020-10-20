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



export default defineComponent({
  setup() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang= "nl";
    const { TranslateToSith} = Translate();

    const translate = (): void => {
        recognition.start();
      
    };

    recognition.onresult = (event) => {
        //console.log(event.results[0][0].transcript);
        var transcript  = event.results[0][0].transcript;
        TranslateToSith(transcript).then((res) => console.log(res));
    }

    recognition.onspeechend = () => {
        recognition.stop();
    }

    return { translate };
  },
});
</script>

<style scoped></style>
