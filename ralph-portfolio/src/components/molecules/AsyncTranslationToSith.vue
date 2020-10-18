<template>
    <div>
        hoi hoi
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

async function getTranslation() {
    return new Promise(resolve => 
    setTimeout(resolve,1000));
} 


export default defineComponent({
    async setup () {
        await getTranslation();

        return {}
    }
})
</script>

<style scoped>

</style>