import api from "./api.js"

const url = import.meta.env.VITE_BASE + "/books";
const showAllBookDetails = async () => {
    return api.get(url);
}

const showBookDetailsById = async (id) => {
    return api.get(`${url}/${id}`);
}

const addBook = async (data) => {
    return api.post(url, data);
} 

const updateBook = async (id, data) => {
    return api.put(`${url}/${id}`, data);
}

const deleteBook = async (id) => {
    return api.delete(`${url}/${id}`);
}

const search = async (keyword) => {
  return await api.get(
    `${url}/search?q=${keyword}&page=1&limit=10`
  );
};

const bookService = {
    showAllBookDetails,
    showBookDetailsById,
    addBook,
    updateBook,
    deleteBook,
    search
}

export default bookService;