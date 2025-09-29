import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import bookService from "../services/book.service";

const Book = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const fetchItem = async () => {
        const response = await bookService.showAllBookDetails();
        if (response.status === 200) {
          setItems(response.data.data);
        }
        return response.data;
      };

      fetchItem();
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(items.data);
  return (
    <div className="container grid grid-cols-4 gap-4">
      {items &&
        items.map((item) => (
          <Card
            key={item.itemId}
            itemId={item.id}
            title={item.author}
            author={item.author}
            coverImage={item.coverImage}
            description={item.description}
          />
        ))}
    </div>
  );
};

export default Book;
