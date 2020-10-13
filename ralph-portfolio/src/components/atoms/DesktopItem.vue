<template>
    <div class="h-auto w-auto flex flex-col py-10 px-4 text-blue-800 hover:text-blue-300">
        <ImageIcon class="h-16" /> 
        {{title}} 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageIcon from "@/components/atoms/ImageIcon.vue"

export default defineComponent({
    props: {
        title: String,
        action: String
    },
    components: {
        ImageIcon,
    },
    setup () {
        return{}
    }
})
</script>

<style scoped>

</style>