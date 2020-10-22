<template>
    <div>
        <input type="text" v-model="query" />
        <button @click="Translate">Vertaal</button>
        <span>{{ answer }}</span>
    </div>
</template>

<script>
import {ref} from "vue";


export default {
    setup () {
        const query = ref("");
        const answer = ref("");
        let utterThis =  null ;
        var recognition = new window.webkitSpeechRecognition();
        var synth = window.speechSynthesis;
        const Translate = () => {
            recognition.start();
        }

        recognition.onresult = (event) =>{
            query.value = event.results[0][0].transcript;
            utterThis = new SpeechSynthesisUtterance(query.value); 
            synth.speak(utterThis);
        }

        recognition.onspeechend = () =>{
            recognition.stop();
        }
        return {Translate ,query, answer}
    }
}
</script>

<style lang="css" scoped>

</style>