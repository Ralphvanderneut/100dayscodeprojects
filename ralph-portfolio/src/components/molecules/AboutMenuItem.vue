<template>
       <div class="border-b border-blue-200 border-opacity-50 w-auto mr-3">
            <span class="text-white text-xl font-semibold leading-snug">{{item.header}}</span>
        </div>
        <ul class="w-auto">
            <li v-for="line in item.lines" :key="line" class="list-japan text-white list-inside p-0" >
                <span class="text-white text-l ml-4"> 
                    {{line}} 
            </span>
            </li>
        </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        item: Object
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>