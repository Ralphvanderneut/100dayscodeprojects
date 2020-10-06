<template>
    <div class="border-r border-blue-400 border-opacity-50 p-8 mt-1 mb-1 text-left">
        <ul>
            <SideBarMenuItem text="Over mij"></SideBarMenuItem>
            <li class="flex flex-row  items-center"><img src="@/assets/icons/folder.svg" class="h-4 mr-1">Projecten</li>
            <li class="flex flex-row items-center"><img src="@/assets/icons/folder.svg" class="h-4 mr-1">blogs</li>
            <li class="flex flex-row  items-center"><img src="@/assets/icons/folder.svg" class="h-4 mr-1">Tekeningen</li>
        </ul>
    </div>
</template>

<script lang="ts">
import SideBarMenuItem from "@/components/atoms/SideBarMenuItem.vue";
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        SideBarMenuItem,
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

</style>