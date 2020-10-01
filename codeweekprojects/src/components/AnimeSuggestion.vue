<template>
  <div>
    <button @click="suggestAnime">Suggest</button>
    <img :src="suggestion.imgUrl" />
    <h2>{{ suggestion.title }}</h2>
    <p>{{ suggestion.synopsis }}</p>
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
