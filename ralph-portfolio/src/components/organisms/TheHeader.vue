<template>
    <div class="bg-blue-800 flex flex-row justify-between text-left pl-2 pr-2">
        <span class=" text-2xl text-white">Ralph's portfolio</span>
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