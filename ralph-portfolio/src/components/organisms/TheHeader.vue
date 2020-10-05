<template>
    <div class="bg-blue-800 text-left h-auto">
        <span class=" text-2xl text-white align-middle ml-2">Ralph's portfolio</span>
        <CloseButton></CloseButton>
    </div>
</template>

<script lang="ts">
import CloseButton from "@/components/atoms/CloseButton.vue"
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        CloseButton,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>