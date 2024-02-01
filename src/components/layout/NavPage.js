import React from "react";
import library from "../../assets/library.svg";

export default function NavPage() {
  const bgImage = {
    backgroundImage: `url(${library})`,
    backgroundSize: "300px 300px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#d1d5db",
    height: "90vh",
  };
  return (
    <React.Fragment>
      <section>
        <div className="bg-white h-auto" style={bgImage}></div>
      </section>
    </React.Fragment>
  );
}
