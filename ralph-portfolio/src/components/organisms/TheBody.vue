<template>
    <div class="flex flex-row">
        <div class=" ml-4">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted } from 'vue';
import {ItemSelected} from "../../composables/ItemSelected";

export default defineComponent({
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>