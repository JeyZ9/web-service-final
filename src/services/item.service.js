import api from "./api.js";

const url = import.meta.env.VITE_BASE + "/items";
const getAll = async (page=1, limit=12) => {
  return await api.get(
    `${url}?page=${page}&limit=${limit}`
  );
};

const search = async (keyword) => {
  return await api.get(
    `${url}/search?q=${keyword}&page=1&limit=10`
  );
};


const itemService = {
  getAll,
  search
};

export default itemService;
