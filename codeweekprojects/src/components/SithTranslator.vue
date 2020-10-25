<template>
    <div class="flex flex-col mx-auto bg-red-700 w-1/3 p-4 rounded-lg border-1 border-black">
        <h1 class="font-mono text-3xl text-white font-extrabold border-b-2 border-white border-dashed"> Sith Translator</h1>
        <div class="mx-auto w-2/3 border-4 border-black rounded-md mt-4">
            <img src="@/assets/img/sithlord.jpg" class="" />
        </div>
        <button @click="RecordAndSpeak" class="bg-white mx-auto w-8 rounded-full mt-4 hover:bg-black fill-black hover:fill-red"><IconMicrophone class="" /></button>
        <!-- <span>{{ answer }}</span> -->
    </div>
</template>

<script>
// /import {ref} from "vue";
import {TranslateToSith} from "@/composables/TranslateToSith.js";
import IconMicrophone from "@/components/IconMicrophone"
export default {
    components: {
        IconMicrophone,
    },
    setup () {
        const {RecordAndSpeak} = TranslateToSith();  
        return {RecordAndSpeak}
    }
}
</script>

<style lang="css" scoped>

</style>