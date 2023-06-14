import axiosClient from "./axiosClient";

type CategoryType = {
  movie: "movie";
  tv: "tv";
};

type MovieType = {
  upcoming?: "upcoming";
  popular?: "popular";
  top_rated?: "top_rated";
};

type TvType = {
  popular: "popular";
  top_rated: "top_rated";
  on_the_air: "on_the_air";
};

const tmdbApi = {
  getMoviesList: (type: string, params?) => {
    const url: string = "movie/" + type;
    return axiosClient.get(url, params);
  },

  getTvList: (type: TvType, params: object) => {
    const url: string = "tv/" + type;
    return axiosClient.get(url, params);
  },

  getVideos: (cate: CategoryType, id: number) => {
    const url: string = cate + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },

  search: (cate: CategoryType, params: object) => {
    const url: string = "search/" + cate;
    return axiosClient.get(url, params);
  },

  detail: (cate: CategoryType, id: number, params: object) => {
    const url: string = cate + "/" + id;
    return axiosClient.get(url, params);
  },

  credits: (cate: CategoryType, id: number) => {
    const url: string = cate + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },

  similar: (cate: CategoryType, id: number) => {
    const url: string = cate + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
 