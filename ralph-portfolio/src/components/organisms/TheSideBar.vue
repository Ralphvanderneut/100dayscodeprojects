<template>
    <div class="border-r border-blue-400 border-opacity-50 p-8 mt-1 mb-1 text-left">
       <SideBarMenu :items="menuItems" @selected="OnMenuItemSelected"></SideBarMenu>
    </div>
</template>

<script lang="ts">
import SideBarMenu from "@/components/molecules/SideBarMenu.vue";
import { defineComponent, ref } from 'vue'
import {ItemSelected} from "../../composables/ItemSelected";

export default defineComponent({
    props: {
        menuItems: Array
    },
    components: {
        SideBarMenu,
    },
    setup (props, {emit}) {

        const {OnItemSelected} = ItemSelected(emit);

        return {OnItemSelected}
    }
})
</script>

<style scoped>

</style>