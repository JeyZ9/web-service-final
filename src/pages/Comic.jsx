import React, { useEffect, useState } from "react";
import comicService from "../services/comics.service";
import ShowItem from "../components/ShowItem";
import Search from "../components/Search";
import { Link } from "react-router";

const Comic = () => {
    const [ items, setItems ] = useState([]);
    const [ filterItems, setFilterItems ] = useState([]);

  useEffect(() => {
    try {
      const fetchItem = async () => {
        const response = await comicService.getAll();
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
    const response = await comicService.search(keyword);
    setFilterItems(response.data.data);
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <Search handleSearch={handleSearch} />
        <Link className="btn btn-primary" to={`/add/comic`}>Add</Link>
      </div>
      <ShowItem items={filterItems} />
    </>
  );
};

export default Comic;
