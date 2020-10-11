<template>
<div >
    <div class="h-auto border-r border-blue-200 border-opacity-50 m-2">
        <img src="@/assets/profileImage.jpg" class="object-contain h-auto w-full p-2" />
    </div>
    <div class="h-auto mr-4">
         <div v-for="category in AboutText" :key="category.header" class="mb-4">
             <div class="border-b border-blue-200 border-opacity-50 w-auto mr-3">
                 <span class="text-white text-xl font-semibold leading-snug">{{category.header}}</span>
             </div>
             <ul class=" w-auto ">
                 <li v-for="line in category.lines" :key="line" class="list-japan text-white list-inside p-0" >
                     <span class="text-white text-l ml-4"> 
                         {{line}} 
                         </span>
                 </li>
             </ul>
             </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        AboutText: Object,
        profileImg: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>