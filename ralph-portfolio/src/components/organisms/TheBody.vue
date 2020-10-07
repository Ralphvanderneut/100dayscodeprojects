<template>
    <div class="flex flex-row">
        <TheSideBar :menuItems="menuItems" @selected="OnMenuItemSelected"></TheSideBar>
        <div class=" ml-4">

        </div>
    </div>
</template>

<script lang="ts">
import TheSideBar from "@/components/organisms/TheSideBar.vue";
import { defineComponent, ref,onMounted } from 'vue';
import {ItemSelected} from "../../composables/ItemSelected";

export default defineComponent({
    components: {
        TheSideBar,
    },
    setup (props,{emit}) {
        const menuItems = ref([{id:1 , text: "Over mij"}, {id:2 , text: "Projecten"}]);

        const {OnItemSelected} = ItemSelected(emit);
        return {OnItemSelected,menuItems}
    }
})
</script>

<style scoped>

</style>