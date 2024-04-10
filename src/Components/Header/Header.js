import React from "react";
import banner from "../image/header.png";
import MovieList from "../MovieList/MovieList";

const Header = () => {
  return (
    <>
    <div style={{ position: "relative" }}>
      <img
        src={banner}
        style={{ height: "100%", width: "100%" }}
        alt="Banner"
      />
      <div
        style={{
          position: "absolute",
          fontSize: "1.6em",
          width: "100%",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>Discover Exciting Events Happening</h1>
        <h1>Near You Stay Tuned for Updates!</h1>
        <p style={{ fontSize: "0.9em", width: "70%", marginLeft: "16%" }}>
          Dorem ipsum ci« Sit am , conÅectetur adipistinyelit. tefi9"ftyelit
          interdum, ac aliquet odio mattis. Classa ent•taciti sociosqu ad
          litOraaorqvyiV per conubia nostra, per
        </p>
      </div>

    </div>
    <MovieList/>
    </>
  );
};

export default Header;
