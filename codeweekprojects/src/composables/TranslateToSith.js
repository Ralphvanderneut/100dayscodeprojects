import { ref } from "vue";

export function TranslateToSith() {

    const googleApiUrl = "https://translate.googleapis.com/translate_a/single?client=gtx";
    //const funTranslationApi = "https://api.funtranslations.com/translate/sith.json";
    
   //const translated = ref("");
    const query = ref("");
    const recognition = new window.webkitSpeechRecognition();
    const synth = window.speechSynthesis;

    const RecordAndSpeak = () => {
        recognition.start();
    }

    recognition.onresult = (event) => {
        query.value = event.results[0][0].transcript;
        translateToSith().then((value) => {
            const utterThis = new SpeechSynthesisUtterance(value);
            synth.speak(utterThis);
         });
    }

    recognition.onspeechend = () => {
        recognition.stop();
    }

    const translateToSith = async () => {
        const resp = await fetch(`${googleApiUrl}&sl=nl&tl=en&dt=t&q=${query.value}`);
        const res = await resp.json();
        const translatedRes = res[0][0][0];
        return translatedRes; 
    }

    return {RecordAndSpeak}

}  