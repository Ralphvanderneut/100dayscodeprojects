<template>
    <button class="text-white hover:text-red-600 float-right" @click="OnClick">X</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup (props,{emit}) {
        

        function OnClick(){
           emit("close");
        }

        return {OnClick}
    }
})
</script>

<style scoped>

</style>