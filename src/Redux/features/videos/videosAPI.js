import axios from "../../../utils/axios";

export const getVideos = async (tags, search, authorName, start, end) => {
  let queryString = `_start=${start}&_end=${end}`;

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (authorName !== "") {
    queryString = `author_like=${authorName}`;
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/videos/?${queryString}`);

  return response.data;
};
