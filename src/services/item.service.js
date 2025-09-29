import api from "./api.js";

const url = import.meta.env.VITE_BASE + "/items";
const getAll = async () => {
  return await api.get(
    `${url}?page=1&limit=10`
  );
};


const itemService = {
  getAll,
};

export default itemService;
