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
  console.log(res);
  const {
    attributes: {
      synopsis,
      titles: { en: title, en_jp: titleJap },
      posterImage: { tiny: imgUrl },
      ...other
    },
  } = res.data;
  return { synopsis, title, titleJap, imgUrl, other };
};

export { getAnimeSuggestion };
