import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikField = ({
  name,
  label,
  type = "text",
  placeholder = "",
  component,
  as,
}) => {
  return (
    <div className="mb-2 mt-2 w-full">
      <label className="block text-gray-700 text-sm mb-2" htmlFor={name}>
        <span className="flex items-center gap-2">
          {label}:{" "}
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm"
          />
        </span>
      </label>
      {component ? (
        React.cloneElement(component, { name, id: name })
      ) : (
        <Field
          as={as}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormikField;
