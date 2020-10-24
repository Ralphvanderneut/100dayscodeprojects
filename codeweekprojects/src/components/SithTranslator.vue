<template>
    <div class="flex flex-col w-auto mx-auto bg-gray-400 w-2/3 p-4">
        <h1 class="font-mono"> Sith Translator</h1>
        <div class="mx-auto w-2/3 border-4 border-gray-700 rounded-md shadow-outline">
            <img src="@/assets/img/sithlord.jpg" class="" />
        </div>
        <button @click="RecordAndSpeak">Vertaal</button>
        <!-- <span>{{ answer }}</span> -->
    </div>
</template>

<script>
// /import {ref} from "vue";
import {TranslateToSith} from "@/composables/TranslateToSith.js";

export default {
    setup () {
        const {RecordAndSpeak} = TranslateToSith();  
        return {RecordAndSpeak}
    }
}
</script>

<style lang="css" scoped>

</style>