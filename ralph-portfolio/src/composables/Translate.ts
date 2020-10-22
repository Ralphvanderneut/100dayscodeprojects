import { ref } from "vue";


export function Translate() {

     const googleApiUrl = "https://translate.googleapis.com/translate_a/single?client=gtx"
     //const funTranslationApi = "https://api.funtranslations.com/translate/sith.json"

    const query = ref("");
    const answer = ref("");

    const TranslateToSith = async (transcript: string): Promise<void> => {
        const resp = await fetch(`${googleApiUrl}&sl=nl&tl=en&dt=t&q=${transcript}`);
        const res = await resp.json();
        const translatedRes = res[0][0][0];
        // const sithResp = await fetch(`${funTranslationApi}?text=${translatedRes}`);
        // const sithRes = await sithResp.json();
        answer.value = translatedRes; 
    }

    return {TranslateToSith, query, answer}

}