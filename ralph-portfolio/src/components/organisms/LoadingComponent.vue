
<template>
<Suspense>
    <template #default>
        <AsyncTranslationToSith />
    </template>
    <template #fallback>
        vertaling is aan het laden.
    </template>
</Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncTranslationToSith from "@/components/molecules/AsyncTranslationToSith.vue";


export default defineComponent({
    components: {
        AsyncTranslationToSith,
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>