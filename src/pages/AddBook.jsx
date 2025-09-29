import React, { useState } from 'react'
import Swal from "sweetalert2"
import bookService from '../services/book.service';
import { useNavigate } from 'react-router';

const AddBook = () => {

    const [ addItem, setAddItem ] = useState(
        {
            title: "",
            author: "",
            category: "",
            publishYear: 0,
            isbn: "",
            status: "AVAILABLE",
            coverImage: "https://example.com/cover.jpg",
            description: "",
            location: "",
            addedDate: Date().now,
            itemType: "",
            publisher: "",
            edition: "",
            pageCount: 0,
            language: "",
            genre: "",
        }
    );

    const navigate = useNavigate();

    const handlechange = (e) => {
      const { name, value } = e.target;
      setAddItem({ ...addItem, [name]: value });
    };


    const handleSubmit = async () => {
      try {
        const response = await bookService.addBook(addItem);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "added successful!",
          });

          setAddItem({
            title: "",
            author: "",
            category: "",
            publishYear: 0,
            isbn: "",
            status: "AVAILABLE",
            coverImage: "https://example.com/cover.jpg",
            description: "",
            location: "",
            addedDate: Date().now,
            itemType: "",
            publisher: "",
            edition: "",
            pageCount: 0,
            language: "",
            genre: "",
          });
          navigate("/books");
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "Invalid data",
        });
      }
    };

  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Add Book</legend>

        <label className="label">Title</label>
        <input
          type="text"
          value={addItem.title}
          name="title"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className="label">author</label>
        <input
          type="text"
          value={addItem.author}
          name="author"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">category</label>
        <input
          type="text"
          value={addItem.category}
          name="category"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">publishYear</label>
        <input
          type="number"
          value={addItem.publishYear}
          name="publishYear"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">isbn</label>
        <input
          type="text"
          value={addItem.isbn}
          name="isbn"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className="label">description</label>
        <input
          type="text"
          value={addItem.description}
          name="description"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">location</label>
        <input
          type="text"
          value={addItem.location}
          name="location"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">itemType</label>
        <input
          type="text"
          value={addItem.itemType}
          name="itemType"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">publisher</label>
        <input
          type="text"
          value={addItem.publisher}
          name="publisher"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">edition</label>
        <input
          type="text"
          value={addItem.edition}
          name="edition"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className="label">pageCount</label>
        <input
          type="number"
          value={addItem.pageCount}
          name="pageCount"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">language</label>
        <input
          type="text"
          value={addItem.language}
          name="language"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className="label">genre</label>
        <input
          type="text"
          value={addItem.genre}
          name="genre"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className="label">Image url</label>
        {addItem.coverImage && <img className="" src={addItem.coverImage} />}
        <input
          type="input"
          value={addItem.coverImage}
          name="coverImage"
          className="input"
          placeholder="image"
          onChange={handlechange}
          required
        />

        <div className="grid grid-cols-2 gap-2 justify-between mt-4">
          <button
            // to={`/`}
            type="submit"
            onClick={handleSubmit}
            className="btn btn-accent w-full text-white"
          >Add</button>
        </div>
      </fieldset>
    </>
  );
}

export default AddBook;
