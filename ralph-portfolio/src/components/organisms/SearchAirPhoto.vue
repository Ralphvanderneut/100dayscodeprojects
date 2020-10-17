<template>
    <div>
        <input type="text" v-model="searchQuery" />
        <button @click="OnSearch" >Search</button>
        <div v-if="results">
            <img v-for="rec in results" :key="rec._id" :src="rec.fotonaam" >
        </div>
    </div>
</template>

<script lang="ts">
import {AirPhoto} from "../../composables/SearchAirPhoto";

import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
    setup () {
        const limit = ref(5);
        const searchQuery = ref("");
        const results: Ref<object[]> = ref([]);
        const { Search } = AirPhoto();

        const OnSearch = (): void => {
            Search(limit.value, searchQuery.value).then((records) => {
                results.value = records;
            })
        }

        return {OnSearch, searchQuery,results}
    }
})
</script>

<style scoped>

</style>