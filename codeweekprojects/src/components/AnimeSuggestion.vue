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
        class="bg-green-400 rounded-lg mx-auto p-2 m-4 text-red-900"
      >
        Suggest
      </button>
    </div>
    <div>
      <div class="flex flex-col bg-gray-200  rounded-md m-10 p-5 w-1/2 mx-auto">
        <h2 class="w-auto h-auto border-b font-mono font-bold text-xl mb-4 ">
          {{ suggestion.title }}
        </h2>
        <div class="flex flex-row border-gray-800">
          <img
            :src="suggestion.imgUrl"
            class="rounded-lg w-auto object-fill mr-2 "
          />
          <p class="leading-5 text-sm text-left break-normal">
            {{ suggestion.synopsis }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAnimeSuggestion } from "../helpers/randomNumber";
export default {
  data() {
    return {
      suggestion: {
        title: "",
        imgurl: "",
        synopsis: "",
        other: null,
      },
      threshold: 2000,
    };
  },
  methods: {
    suggestAnime() {
      getAnimeSuggestion(this.threshold).then((res) => {
        this.suggestion = res;
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
