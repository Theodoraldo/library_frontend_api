import React from "react";
import { useDispatch } from "react-redux";
import { postBook } from "../../../../redux/Book/postBookDataSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CreateBook = () => {
  const dispatch = useDispatch();

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
      errors.title = " * Required";
    }
    if (!values.author) {
      errors.author = " * Required";
    }
    if (!values.pages) {
      errors.pages = " * Required";
    }
    if (!values.available_copies) {
      errors.available_copies = " * Required";
    }
    if (!values.published_date) {
      errors.published_date = " * Required";
    }
    if (!values.genre_id) {
      errors.genre_id = " * Required";
    }
    return errors;
  };

  const onSubmit = (values, { setFieldValue }) => {
    dispatch(postBook(values));
    console.log("formik values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="text-2xl font-bold">Create Book</div>
          <div>
            <div className="flex justify-between gap-5 mt-2">
              <div className="mb-2 mt-2 w-full">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="title"
                >
                  <span className="flex items-center gap-2">
                    Book Title:{" "}
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </span>
                </label>
                <Field
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </div>

              <div className="mb-2 mt-2 w-full">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="author"
                >
                  <span className="flex items-center gap-2">
                    Author Name (Fullname):{" "}
                    <ErrorMessage
                      name="author"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </span>
                </label>
                <Field
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                  id="author"
                  type="text"
                  name="author"
                  placeholder="Author Name"
                />
              </div>
            </div>

            <div className="flex justify-between gap-5 mt-2">
              <div className="mb-2 mt-2 w-full">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="published_date"
                >
                  <span className="flex items-center gap-2">
                    Published Date:{" "}
                    <ErrorMessage
                      name="published_date"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </span>
                </label>
                <Field
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                  id="published_date"
                  type="date"
                  name="published_date"
                  placeholder="Published Date"
                />
              </div>

              <div className="flex justify-between gap-5 w-full">
                <div className="mb-2 mt-2">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="available_copies"
                  >
                    <span className="flex items-center gap-2">
                      Available Copies:{" "}
                      <ErrorMessage
                        name="available_copies"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </span>
                  </label>
                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                    id="available_copies"
                    type="number"
                    name="available_copies"
                    placeholder="Available Copies"
                  />
                </div>

                <div className="mb-2 mt-2">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="pages"
                  >
                    <span className="flex items-center gap-2">
                      Pages:{" "}
                      <ErrorMessage
                        name="pages"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </span>
                  </label>
                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                    id="pages"
                    type="number"
                    name="pages"
                    placeholder="Pages"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-5 w-full">
              <div className="w-full mt-2">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="note"
                >
                  Note:
                </label>
                <Field
                  className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                  id="note"
                  as="textarea"
                  name="note"
                  placeholder="Note"
                />
              </div>

              <div className="flex flex-col justify-between gap-5 w-full">
                <div className="mb-2 mt-2">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="genre_id"
                  >
                    <span className="flex items-center gap-2">
                      Genre:{" "}
                      <ErrorMessage
                        name="genre_id"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </span>
                  </label>
                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                    id="genre_id"
                    type="text"
                    name="genre_id"
                    placeholder="Genre"
                  />
                </div>

                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-2"
                    htmlFor="image"
                  >
                    Cover Image:
                  </label>
                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                    id="image"
                    type="file"
                    name="image"
                    placeholder="image"
                    onChange={(event) => {
                      if (event.currentTarget.files.length > 0) {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }
                    }}
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBook;
