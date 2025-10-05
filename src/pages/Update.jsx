import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import bookService from "../services/book.service";
import { useNavigate, useParams } from "react-router";
import journalService from "../services/journals.service";
import comicService from "../services/comics.service";

const Update = () => {
  const { type, id } = useParams();

  console.log(type, id)

  const [addItem, setAddItem] = useState({
    // title: "",
    // author: "",
    // category: "",
    // publishYear: 0,
    // isbn: "",
    // status: "AVAILABLE",
    // coverImage: "https://example.com/cover.jpg",
    // description: "",
    // location: "",
    // addedDate: Date().now,
    // itemType: "",
    // publisher: "",
    // edition: "",
    // pageCount: 0,
    // language: "",
    // genre: "",
    // volume: "",
    // issn: "",
    // issue: "",
    // publicationFrequency: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAddItem({ ...addItem, [name]: value });
  };

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

        setAddItem(response.data.data);

        return response;
    }
    fetchItemById();
  }, [id]);

  // console.log(type);
  useEffect(() => {
    if(!(type == "book" || type == "journal" || type == "comic")){
      navigate("/not-found")
    }
  }, [type]);

  const handleSubmit = async () => {
    try {
      let response;
      if (type === "book") {
        response = await bookService.updateBook(id, addItem);
      }

      if (type === "journal") {
        response = await journalService.update(id, addItem);
      }

      if (type === "comic") {
        response = await comicService.update(id, addItem);
      }

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
          status: "",
          coverImage: "",
          description: "",
          location: "",
          itemType: "",
          publisher: "",
          edition: "",
          pageCount: 0,
          language: "",
          genre: "",
          volume: "",
          issn: "",
          issue: "",
          publicationFrequency: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "add failed!",
        text: "Invalid data",
      });
    }
  };

  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Update {type}</legend>

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

        {/* <label className="label">description</label>
        <input
          type="text"
          value={addItem.description}
          name="description"
          className="input"
          placeholder=""
          onChange={handlechange}
          required
        /> */}
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

        {/* ////////////Book//////////// */}
        <label className={`label ${type !== "book" ? "hidden" : ""}`}>edition</label>
        <input
          type="text"
          value={addItem.edition}
          name="edition"
          className={`input ${type !== "book" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "book" ? "hidden" : ""}`}>genre</label>
        <input
          type="text"
          value={addItem.genre}
          name="genre"
          className={`input ${type !== "book" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />
        {/* ////////////////////////////// */}

        {/* //////////Book&journal//////// */}
        <label className={`label ${type !== "book" && type !== "journal" ? "hidden" : ""}`}>publisher</label>
        <input
          type="text"
          value={addItem.publisher}
          name="publisher"
          className={`input ${type !== "book" && type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "book" && type !== "journal" ? "hidden" : ""}`}>pageCount</label>
        <input
          type="number"
          value={addItem.pageCount}
          name="pageCount"
          className={`input ${type !== "book" && type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "book" && type !== "journal" ? "hidden" : ""}`}>language</label>
        <input
          type="text"
          value={addItem.language}
          name="language"
          className={`input ${type !== "book" && type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />
        {/* ////////////////////////////// */}

        {/* ////////////journal/////////// */}
        <label className={`label ${type !== "journal" ? "hidden" : ""}`}>volume</label>
        <input
          type="text"
          value={addItem.volume}
          name="volume"
          className={`input ${type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "journal" ? "hidden" : ""}`}>issue</label>
        <input
          type="text"
          value={addItem.issue}
          name="issue"
          className={`input ${type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className={`label ${type !== "journal" ? "hidden" : ""}`}>publicationFrequency</label>
        <input
          type="text"
          value={addItem.publicationFrequency}
          name="publicationFrequency"
          className={`input ${type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />
        <label className={`label ${type !== "journal" ? "hidden" : ""}`}>issn</label>
        <input
          type="text"
          value={addItem.issn}
          name="issn"
          className={`input ${type !== "journal" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        {/* ////////////////////////////// */}

        {/* //////////// comic /////////// */}
        <label className={`label ${type !== "comic" ? "hidden" : ""}`}>volume</label>
        <input
          type="text"
          value={addItem.volume}
          name="volume"
          className={`input ${type !== "comic" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "comic" ? "hidden" : ""}`}>issue</label>
        <input
          type="text"
          value={addItem.issue}
          name="issue"
          className={`input ${type !== "comic" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        <label className={`label ${type !== "comic" ? "hidden" : ""}`}>publicationFrequency</label>
        <input
          type="text"
          value={addItem.publicationFrequency}
          name="publicationFrequency"
          className={`input ${type !== "comic" ? "hidden" : ""}`}
          placeholder=""
          onChange={handlechange}
          required
        />

        {/* /////////////////////////////////// */}

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

        <div className="w-full mb-4 textarea rounded-lg">
            <div className="px-4 py-2">
                <label htmlFor="comment" className="sr-only">description</label>
                <textarea id="comment" rows="4" name="description" value={addItem.description} onChange={handlechange} className="w-full px-0 text-sm" placeholder="Write a comment..." required ></textarea>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2 justify-between mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-accent w-full text-white"
          >
            Update
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default Update