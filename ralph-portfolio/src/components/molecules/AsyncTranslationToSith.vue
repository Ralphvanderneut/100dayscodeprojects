<template>
    <div>
        <input type="text" v-model="query" />
        <button @click="translate">Vertaal</button>
        <span>{{answer}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import {Translate} from "../../composables/Translate";



export default defineComponent({
    async setup () {
        const { TranslateToSith , query, answer} = Translate();

        const translate = (): void => {
            TranslateToSith().then(res => console.log(res)); 
        }

        return {translate, query,answer}
    }
})
</script>

<style scoped>

</style>