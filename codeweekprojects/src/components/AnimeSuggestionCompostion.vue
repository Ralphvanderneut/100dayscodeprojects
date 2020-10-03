<template>
  <div class="container mx-auto">
    <div
      class="flex flex-col bg-gray-100 rounded-md shadow-sm w-1/3 mx-auto p-4"
    >
      <h1 class="font-mono font-semibold text-2xl">
        Suggest an anime?
      </h1>
      <button
        @click="suggestAnime"
        class="bg-green-400 rounded-lg mx-auto p-2 m-4 text-red-900 hover:bg-red-900 hover:text-green-400"
      >
        Suggest
      </button>
    </div>
    <div v-if="suggestion">
      <div class="flex flex-col bg-gray-200  rounded-md m-10 p-5 w-1/2 mx-auto">
        <h2 class="w-auto h-auto border-b font-mono font-bold text-xl mb-4 ">
          {{ suggestion.title ?? suggestion.titleJap }}
        </h2>
        <div class="flex flex-row border-gray-800">
          <p
            class="leading-5 text-sm text-left break-normal"
            v-html="suggestion.synopsis"
          ></p>
          <img
            :src="suggestion.imgUrl"
            class="rounded-lg ml-2 mt-auto mb-auto"
            style="width:110px; height:156px;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AnimeComposable } from "../composables/SuggestAnime";

export default {
  setup() {
    const { suggestion, suggestAnime } = AnimeComposable();

    return { suggestion, suggestAnime };
  },
};
</script>

<style lang="scss" scoped></style>
