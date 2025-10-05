import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import bookService from '../services/book.service';
import journalService from '../services/journals.service';
import comicService from '../services/comics.service';

const ShowItemDetails = () => {
    const [ item, setItem ] = useState([]);
    const { type, id } = useParams();

    useEffect(() => {
    if(!(type == "book" || type == "journal" || type == "comic")){
        navigate("/not-found")
    }
    }, [type]);

    useEffect(() => {
        const fetchItemById = async () => {
            let response;
            if(type == "book"){
                response = await bookService.showBookDetailsById(id);
            }

            if(type == "journal"){
                response = await journalService.getById(id);
            }

            if(type == "comic"){
                response = await comicService.getById(id);
            }

            setItem(response.data.data);

            return response;
        }
        fetchItemById();
    }, [id]);

    console.log(item);

  return (
    <div>
        {item && (
            <div key={item.itemId} className="flex gap-10 mt-10">
                <div className="w-[258px] h-[387]">
                    <img src={item.coverImage} className='w-full h-full object-cover' alt="" />
                </div>
                <div className="flex flex-col gap-4 mx-10">
                    <div className="flex flex-col gap-2 border-b-1 pb-4 border-[#80808050]">
                        <h1 className='text-3xl'>{item.title}</h1>
                        <p className='text-xs text-start text-[#999999]'>ผู้เขียน: {item.author}</p>
                        <p className='text-sm text-[#999999]'>คำอธิบาย: {item.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2>รายละเอียดหนังสือ</h2>
                        <ul className='grid grid-cols-2 text-sm text-[#999999] gap-y-2'>
                            <li>ภาษา: {item.language}</li>
                            <li>ตำแหน่ง: {item.location}</li>
                            <li>จำนวนหน้า: {item.pageCount}</li>
                            <li>ปีที่วางจำหน่าย: {item.publishYear}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )}
                <div className="w-full flex justify-end gap-4">
            <button className='btn btn-warning'>
                Edit
            </button>
            <button className='btn btn-error'>
                Deleded
            </button>
        </div>
    </div>
  )
}

export default ShowItemDetails