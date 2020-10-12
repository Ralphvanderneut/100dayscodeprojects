<template>
    <div class="flex flex-row h-auto">
        <ImageIcon class="h-20"> </ImageIcon>
        <h2>{{title}}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageIcon from "@/components/atoms/ImageIcon.vue"

export default defineComponent({
    props: {
        title: String 
    },
    components: {
        ImageIcon,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>