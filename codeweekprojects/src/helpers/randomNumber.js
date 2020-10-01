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

const getAnimeSuggestion = async (multiplier) => {
  const resp = await fetch(
    `https://kitsu.io/api/edge/anime/${GetRandom(multiplier)}`
  );
  const res = await resp.json();
  const {
    attributes: {
      synopsis,
      titles: { en: title },
      posterImage: { tiny: imgUrl },
      ...other
    },
  } = res.data;
  return { synopsis, title, imgUrl, other };
};

export { getAnimeSuggestion };
