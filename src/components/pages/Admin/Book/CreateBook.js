import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import GenreInput from "./GenreInput";
import FormikField from "../../../UIElements/FormikField";
import FormikImageInput from "../../../UIElements/FormikImageInput";
import { postBook } from "../../../../redux/Book/postBookDataSlice";
import { validateBook } from "../../../Shared/Util/Validators";

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

  const onSubmit = (values) => {
    dispatch(postBook({ ...values }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateBook}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => {
        return (
          <Form>
            <div className="text-2xl font-bold">Create Book</div>
            <div>
              <div className="flex justify-between gap-5 mt-2">
                <div className="mb-2 mt-2 w-full">
                  <FormikField name="title" label="Title" placeholder="Title" />
                </div>

                <div className="mb-2 mt-2 w-full">
                  <FormikField
                    name="author"
                    label="Author"
                    placeholder="Author Name"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-5 mt-2">
                <div className="mb-2 mt-2 w-full">
                  <FormikField
                    name="published_date"
                    label="Published Date"
                    type="date"
                    placeholder="Published Date"
                  />
                </div>

                <div className="flex justify-between gap-5 w-full">
                  <div className="mb-2 mt-2">
                    <FormikField
                      name="available_copies"
                      label="Available Copies"
                      type="number"
                      placeholder="Available Copies"
                    />
                  </div>

                  <div className="mb-2 mt-2">
                    <FormikField
                      name="pages"
                      label="Pages"
                      type="number"
                      placeholder="Pages"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-5 w-full">
                <div className="w-full mt-2">
                  <FormikField
                    name="note"
                    label="Note"
                    as="textarea"
                    placeholder="Note"
                  />
                </div>

                <div className="flex flex-col justify-between gap-5 w-full">
                  <div className="mb-2 mt-2">
                    <FormikField
                      name="genre_id"
                      label="Genre"
                      component={<GenreInput id="genre_id" />}
                    />
                  </div>

                  <FormikImageInput
                    name="image"
                    label="Cover Image"
                    id="image"
                  />

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
        );
      }}
    </Formik>
  );
};

export default CreateBook;
