<template>
 <li class="flex flex-row items-center"><img src="@/assets/icons/folder.svg" class="h-4 mr-1"> {{text}}</li>
</template>

<script lang="ts">
import { defineComponent  } from 'vue'

export default defineComponent({
    props: {
        text: {
            type: String,
            required:true
        },
    },
    setup () {
        return{};
    }
})
</script>

<style scoped>

</style>