import api from "./api.js";

const url = import.meta.env.VITE_BASE + "/comics";
const getAll = async () => {
  return api.get(url);
};

const getById = async (id) => {
  return api.get(`${url}/${id}`);
};

const add = async (data) => {
  return api.post(url, data);
};

const update = async (id, data) => {
  return api.put(`${url}/${id}`, data);
};

const deleted = async (id) => {
  return api.delete(`${url}/${id}`);
};

const search = async (keyword) => {
  return await api.get(
    `${url}/search?q=${keyword}&page=1&limit=10`
  );
};

const comicService = {
  getAll,
  getById,
  add,
  update,
  deleted,
  search
};

export default comicService;
