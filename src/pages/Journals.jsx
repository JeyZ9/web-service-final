import React, { useEffect, useState } from "react";
import journalService from "../services/journals.service";
import ShowItem from "../components/ShowItem";
import Search from "../components/Search";
import { Link } from "react-router";

const Journals = () => {
  const [ items, setItems ] = useState([]);
  const [ filterItems, setFilterItems ] = useState([]);

  useEffect(() => {
    try {
      const fetchItem = async () => {
        const response = await journalService.getAll();
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
    const response = await journalService.search(keyword);
    setFilterItems(response.data.data);
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <Search handleSearch={handleSearch} />
        <Link className="btn btn-primary" to={`/add/journal`}>Add</Link>
      </div>
      <ShowItem items={filterItems} />
    </>
  );
};

export default Journals;
