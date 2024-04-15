import axiosClient from "../axiosClient";
const apiKey = "AIzaSyB1fUCYbeLEBYY03c1mejec4NEjwxg6loA";

export function searchResults({ commit }: any, keyword: any) {
  commit("setLoading", true);
  const params = {
    key: apiKey,
    part: "snippet",
    type: ["videos", "channels"],
    maxResults: 20,
    q: keyword,
  };

  axiosClient
    .get(`search?`, { params })
    .then(({ data }) => {
      commit("setSearchResults", data.items);
      commit("setLoading", false);
    })
    .catch((error) => {
      console.error(error);
      commit("setLoading", false);
    });
}
