import React from "react";
import { useFormik } from "formik";

const CreateGenre = () => {
  const initialValues = {
    genreName: "",
    description: "",
  };

  const onSubmit = (values) => {
    console.log("formik values", values);
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="text-2xl font-bold">Create New Genre</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="genreName"
          >
            Genre Name:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="genreName"
            type="text"
            placeholder="Genre Name"
            onChange={formik.handleChange}
            value={formik.values.genreName}
          />
          {formik.errors.genreName ? (
            <div className="text-red-500 text-xs">
              {formik.errors.genreName}
            </div>
          ) : null}
        </div>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            className="appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="description"
            type="textarea"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description ? (
            <div className="text-red-500 text-xs">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded border border-gray-400 shadow-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateGenre;
