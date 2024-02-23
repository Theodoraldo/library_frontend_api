import React from "react";
import { useField } from "formik";

const FormikImageInput = ({ label, ...props }) => {
  const [, , helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = async (event) => {
    if (event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0];
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        alert("Invalid image file");
        return;
      }
      const base64String = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const urlSafeString = base64String
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      setValue(urlSafeString);
    }
  };

  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm mb-2" htmlFor={props.id}>
        {label}:
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
        type="file"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default FormikImageInput;
