import React from "react";

const BookImage = ({ imagePath, title, className }) => {
  const base64Image = imagePath
    ? imagePath.replace(/-/g, "+").replace(/_/g, "/")
    : "";
  const padding =
    base64Image.length % 4 ? "=".repeat(4 - (base64Image.length % 4)) : "";
  const paddedBase64Image = base64Image + padding;

  let format;
  if (paddedBase64Image.startsWith("/9j/")) {
    format = "jpeg";
  } else if (paddedBase64Image.startsWith("iVBOR")) {
    format = "png";
  } else if (paddedBase64Image.startsWith("R0lGOD")) {
    format = "gif";
  } else if (paddedBase64Image.startsWith("Qk02")) {
    format = "bmp";
  } else {
    format = "jpeg";
  }

  return (
    <img
      src={`data:image/${format};base64,${paddedBase64Image}`}
      alt={title}
      className={`object-cover ${className}`}
    />
  );
};

export default BookImage;
