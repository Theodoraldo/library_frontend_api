import React from "react";
import { postGenre } from "../../../../redux/Genre/postGenreDataSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateGenre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    genreName: "",
    description: "",
  };

  const onSubmit = (values) => {
    dispatch(postGenre(values));
    navigate("/mainpage/genres");
  };

  const validate = (values) => {
    let errors = {};
    if (!values.genreName) {
      errors.genreName = "Genre name is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="text-2xl font-bold">Create New Genre</div>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="genreName"
          >
            Genre Name:
          </label>
          <Field
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="genreName"
            name="genreName"
            type="text"
            placeholder="Genre Name"
          />
          <ErrorMessage
            name="genreName"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <Field
            className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="description"
            as="textarea"
            name="description"
            placeholder="Description"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CreateGenre;
