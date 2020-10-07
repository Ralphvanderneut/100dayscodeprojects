<template>
    <ul>
        <SideBarMenuItem v-for="item in items" :key="item.id" @click="OnItemSelected(item.id)" > {{item.text}}</SideBarMenuItem>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBarMenuItem from "@/components/atoms/SideBarMenuItem.vue";
import {ItemSelected} from "../../composables/ItemSelected";
export default defineComponent({
    props: {
        items: {
            type: Array,
        }
    },
    components: {
        SideBarMenuItem,
    },
    setup (props,{emit}) {
        const {OnItemSelected} = ItemSelected(emit);

        return {OnItemSelected}
    }
})
</script>

<style scoped>

</style>