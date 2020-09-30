<template>
  <div>
    <button @click="suggestAnime">Suggest</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Suggestion: {
        title: "",
        imgurl: "",
      },
    };
  },
  methods: {
    suggestAnime() {
      this.multiplier = 6000;

      const NumberGenerator = {
        multiplier: 20,
        GetRandom: () => {
          {
            {
              {
                var suggest = Math.floor(Math.random() * this.multiplier);
              }
            }
          }
          return suggest;
        },
        GetRandomOld: function () {
          {
            {
              {
                var suggest = Math.floor(Math.random() * this.multiplier);
              }
            }
          }
          return suggest;
        },
      };

      console.log(NumberGenerator.GetRandomOld());

      const getAnimeSuggestion = async () => {
        const resp = await fetch("https://kitsu.io/api/edge/anime/1");
        const res = await resp.json();
        return res;
      };

      getAnimeSuggestion().then((data) => {
        const {
          attributes: {
            synopsis,
            titles: { en: title },
            posterImage: { tiny: imgUrl },
          },
        } = data.data;
        console.log(synopsis);
        console.log(title);
        console.log(imgUrl);
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>