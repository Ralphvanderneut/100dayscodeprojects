import { ref } from "vue";

export function AnimeComposable() {
  const threshold = ref(3000);
  const suggestion = ref(null);

  const suggestAnime = () => {
    getAnimeSuggestion(threshold.value).then((res) => {
      suggestion.value = res;
    });
  };

  const getAnimeSuggestion = async (multiplier) => {
    const resp = await fetch(
      `https://kitsu.io/api/edge/anime/${GetRandom(multiplier)}`
    );
    const res = await resp.json();
    return NormalizeAnimeSuggestion(res);
  };

  const NormalizeAnimeSuggestion = (data) => {
    const {
      attributes: {
        synopsis,
        titles: { en: title, en_jp: titleJap },
        posterImage: { tiny: imgUrl },
        ...other
      },
    } = data.data;
    return { synopsis, title, titleJap, imgUrl, other };
  };

  const GetRandom = (multiplier) => {
    {
      {
        {
          var suggest = Math.floor(Math.random() * multiplier);
        }
      }
    }
    return suggest;
  };

  return { suggestion, suggestAnime };
}
