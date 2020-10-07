<template>
 <li class="flex flex-row items-center"><img src="@/assets/icons/folder.svg" class="h-4 mr-1"><slot></slot></li>
</template>

<script lang="ts">
import { defineComponent  } from 'vue'

export default defineComponent({
    setup () {
        return{ };
    }
})
</script>

<style scoped>

</style>