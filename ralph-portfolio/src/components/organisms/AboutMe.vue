<template>
<div >
    <div class="h-auto border-r border-blue-200 border-opacity-50 m-2">
        <img src="@/assets/profileImage.jpg" class="object-contain h-auto w-full p-2" />
    </div>
    <div class="h-auto mr-4">
         <div v-for="category in AboutText" :key="category.header" class="mb-4">
            <AboutMenuItem :item="category" />     
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutMenuItem from "@/components/molecules/AboutMenuItem.vue";

export default defineComponent({
    props: {
        AboutText: Object,
        profileImg: String
    },
    components: {
        AboutMenuItem,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>