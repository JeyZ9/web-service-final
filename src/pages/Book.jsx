import React, { useEffect, useState } from "react";
import bookService from "../services/book.service";
import ShowItem from "../components/ShowItem";
import Search from "../components/Search";
import { Link } from "react-router";

const Book = () => {
  const [ items, setItems ] = useState([]);
  const [ filterItems, setFilterItems ] = useState([]);

  useEffect(() => {
    try {
      const fetchItem = async () => {
        const response = await bookService.showAllBookDetails();
        if (response.status === 200) {
          setItems(response.data.data);
          setFilterItems(response.data.data);
        }
        return response.data;
      };

      fetchItem();
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  const handleSearch = async (keyword) => {

    if(keyword === ""){
      setFilterItems(items);
      return;
    }
    const response = await bookService.search(keyword);
    setFilterItems(response.data.data);
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <Search handleSearch={handleSearch} />
        <Link className="btn btn-primary" to={`/add/book`}>Add</Link>
      </div>
      <ShowItem items={filterItems} />
    </>
  );
};

export default Book;
