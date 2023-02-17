import axios from "axios";

const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "7ee976690emsh3cb2b05b85feff6p10c05ajsn5d11dca377e1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchApi = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;
};
