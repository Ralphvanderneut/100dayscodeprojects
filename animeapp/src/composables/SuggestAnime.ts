import { ref } from "vue";

export function AnimeComposable() {
  const threshold = ref(3000);
  const suggestion = ref(null);

  const GetRandom = function(multiplier: number): number {
    const suggest: number = Math.floor(Math.random() * multiplier);
    return suggest;
  };

  const NormalizeAnimeSuggestion = function(data: any): any {
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

  const getAnimeSuggestion = async (multiplier: number): Promise<any> => {
    const resp = await fetch(
      `https://kitsu.io/api/edge/anime/${GetRandom(multiplier)}`
    );
    const res = await resp.json();
    return NormalizeAnimeSuggestion(res);
  };

  const suggestAnime = function(): void {
    getAnimeSuggestion(threshold.value).then((res) => {
      suggestion.value = res;
    });
  };

  return { suggestAnime, suggestion };
}
