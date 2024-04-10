import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { MapPin, AlignJustify, Heart } from "lucide-react";
import Header from "../Header/Header";

const Navbar = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(
          `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
    <div className="navhead">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h4 style={{ color: "red" }}>BookUsNow</h4>
        </div>
        <div>
          <MapPin style={{ height: "13px", width: "15px" }} />
          {location && <span style={{color:"#7f8286"}}>Phagwara, Punjab</span>}
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="Catagories">
            <AlignJustify
              style={{ color: "white", height: "13px", width: "15px" }}
            />
            <span style={{ color: "white" }}>Catagories</span>
          </button>
          <input type="text" style={{ width: "600px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around",color:"#7f8286" }}>
          <h4>Live show</h4>
          <h4>Streams</h4>
          <h4>Movies</h4>
          <h4>Play</h4>
          <h4>Event</h4>
          <h4>Sports</h4>
          <h4>Activities</h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 style={{ marginRight: "10px" }}>
          <Heart style={{ height: "13px", width: "15px", marginRight:"15px"}} />
          Facorate
        </h5>
        <button style={{ height: "30px" }}>Sign Up</button>
      </div>
    </div>
    <Header />
    </>
  );
};

export default Navbar;
