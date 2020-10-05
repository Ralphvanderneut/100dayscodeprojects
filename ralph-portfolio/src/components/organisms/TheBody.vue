<template>
    <div class="flex flex-row">
        <TheSideBar></TheSideBar>
    </div>
</template>

<script lang="ts">
import TheSideBar from "@/components/organisms/TheSideBar.vue";
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        TheSideBar,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>