import React from "react";
import { useSelector } from "react-redux";
import { useField } from "formik";

const GenreInput = ({ id, ...props }) => {
  const { getAllGenreData } = useSelector((state) => state.getAllGenres);
  const [field] = useField(props);

  return (
    <select id={id} {...field}>
      {getAllGenreData.map((genre, index) => (
        <option key={index} value={genre.id}>
          {genre.genre_name}
        </option>
      ))}
    </select>
  );
};

export default GenreInput;
