import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOneGenre } from "../../../../redux/Genre/getOneGenreSlice";
import { updateGenre } from "../../../../redux/Genre/updateGenreSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const EditGenre = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getOneGenreData, loading, error } = useSelector(
    (state) => state.getOneGenre
  );

  const initialValues = {
    genreId: `${getOneGenreData.id}`,
    genreName: `${getOneGenreData.genre_name}`,
    description: `${getOneGenreData.description}`,
  };

  useEffect(() => {
    dispatch(fetchOneGenre(id));
  }, [dispatch, id]);

  const onSubmit = async (values) => {
    dispatch(updateGenre(values));
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
    <>
      {loading && (
        <div className="text-green-500 font-bold bg-green-100 p-3 mt-3 rounded">
          Loading data...
        </div>
      )}
      {error && (
        <div className="text-red-500 font-bold bg-red-100 p-3 mt-3 rounded">
          {error}
        </div>
      )}
      {!loading && !error && (
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="text-2xl font-bold">Edit Genre</div>
            <div className="mb-4 mt-4">
              <Field
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
                id="genreId"
                name="genreId"
                type="text"
                placeholder="ID"
                disabled
                hidden
              />
            </div>
            {loading}
            {error}
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
                Update Record
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default EditGenre;
