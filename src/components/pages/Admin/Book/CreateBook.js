import React from "react";
import { useFormik } from "formik";

const CreateBook = () => {
  const initialValues = {
    title: "",
    author: "",
    published_date: "",
    available_copies: "",
    pages: "",
    note: "",
    genre_id: "",
    image: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.title) {
      errors.title = "Book title is required";
    }
    if (!values.author) {
      errors.author = "Author is required";
    }
    if (!values.pages) {
      errors.pages = "Book pages is required";
    }
    if (!values.available_copies) {
      errors.available_copies = "Quantity is required";
    }
    if (!values.published_date) {
      errors.published_date = "Published date is required";
    }
    if (!values.genre_id) {
      errors.genre_id = "Genre is required";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log("formik values", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <div className="text-2xl font-bold">Create Book</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-between gap-5 mt-2">
          <div className="mb-2 mt-2 w-full">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="title">
              Book Title:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title ? (
              <div className="text-red-500 text-xs">{formik.errors.title}</div>
            ) : null}
          </div>

          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="author"
            >
              Author Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="author"
              type="text"
              name="author"
              placeholder="Author Name"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
            {formik.errors.author ? (
              <div className="text-red-500 text-xs">{formik.errors.author}</div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-between gap-5 mt-2">
          <div className="mb-2 mt-2 w-full">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="published_date"
            >
              Published Date:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="published_date"
              type="date"
              name="published_date"
              placeholder="Published Date"
              onChange={formik.handleChange}
              value={formik.values.published_date}
            />
            {formik.errors.published_date ? (
              <div className="text-red-500 text-xs">
                {formik.errors.published_date}
              </div>
            ) : null}
          </div>

          <div className="flex justify-between gap-5 w-full">
            <div className="mb-2 mt-2">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="available_copies"
              >
                Available Copies:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="available_copies"
                type="number"
                name="available_copies"
                placeholder="Available Copies"
                onChange={formik.handleChange}
                value={formik.values.available_copies}
              />
              {formik.errors.available_copies ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.available_copies}
                </div>
              ) : null}
            </div>

            <div className="mb-2 mt-2">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="pages"
              >
                Pages:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="pages"
                type="number"
                name="pages"
                placeholder="Pages"
                onChange={formik.handleChange}
                value={formik.values.pages}
              />
              {formik.errors.pages ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.pages}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-5 w-full">
          <div className="w-full mt-2">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="note">
              Note:
            </label>
            <textarea
              className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="note"
              type="textarea"
              name="note"
              placeholder="Note"
              onChange={formik.handleChange}
              value={formik.values.note}
            />
          </div>

          <div className="flex flex-col justify-between gap-5 w-full">
            <div className="mb-2 mt-2">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="genre_id"
              >
                Genre:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="genre_id"
                type="text"
                name="genre_id"
                placeholder="Genre"
                onChange={formik.handleChange}
                value={formik.values.genre_id}
              />
              {formik.errors.genre_id ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.genre_id}
                </div>
              ) : null}
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="image"
              >
                Cover Image:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="image"
                type="file"
                name="image"
                placeholder="image"
                onChange={formik.handleChange}
                value={formik.values.image}
              />
            </div>

            <div className="mb-2">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 mt-2 rounded focus:outline-none focus:shadow-outline border border-gray-400 shadow-lg"
                type="submit"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateBook;
