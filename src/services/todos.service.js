import httpService from "./http.service"
import axios from "axios";

axios.defaults.baseURL= "https://jsonplaceholder.typicode.com/"


const todosEndpoint = "todos/"
const todosService = {
  fetch: async() => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10
      },
    });
    return data;
  },
};
export default todosService;