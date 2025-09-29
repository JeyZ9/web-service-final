import api from "./api.js";

const url = import.meta.env.VITE_BASE + "/journals";
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

const journalService = {
  getAll,
  getById,
  add,
  update,
  deleted,
};

export default journalService;
