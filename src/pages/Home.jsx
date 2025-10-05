import React, { useEffect, useState } from 'react'
import itemService from '../services/item.service';
import ShowItem from '../components/ShowItem';
import Search from '../components/Search';

const Home = () => {
  const [ items, setItems ] = useState([]);
  const [ filterItems, setFilterItems ] = useState([]);

  useEffect(() => {
    try{
      const fetchItem = async () => {
        const response = await itemService.getAll();
        if(response.status === 200){
          setItems(response.data.data);
          setFilterItems(response.data.data) 
        }
        return response.data;
      }
      fetchItem();
    }catch (err) {
      console.log(err);
    }
  }, [])

  const handleSearch = async (keyword) => {

    if(keyword === ""){
      setFilterItems(items);
      return;
    }
    const response = await itemService.search(keyword);
    setFilterItems(response.data.data);
  }

  return (
    <>
      <div className="container flex flex-col items-center justify-center my-10">
        <h1 className='text-5xl font-semibold'>
          E3S Store
        </h1>
      </div>
      <Search handleSearch={handleSearch} />
      <ShowItem items={filterItems} />
    </>
  );
}

export default Home