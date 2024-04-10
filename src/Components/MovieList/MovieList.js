import React, { useEffect, useRef } from "react";
import { MoveRight, MapPin } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { transformDriveUrl } from "../../lib/utils";
import useEmblaCarousel from "embla-carousel-react"; 
import Upcoming from "../Upcoming/Upcoming";

const MovieList = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(); 

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_MOVIE_LIST_URL)
      .then((response) => {
        setMovieList(response.data.events);
        // console.log(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const moveRightRef = useRef(null);

  useEffect(() => {
    if (moveRightRef?.current && emblaRef) {
      moveRightRef?.current?.addEventListener("click", () => {
        emblaApi?.scrollNext();
      });
    }
  }, [emblaApi]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontWeight:"bold",
          marginLeft:"5%",
        }}
      >
        <span>Recommended shows</span>
        <MoveRight ref={moveRightRef}  />
      </div>
      <div
        ref={emblaRef} 
        style={{ overflow: "hidden" }} 
      >
        <div
          style={{
            display: "flex",
            marginTop: "1%",
            gap: "10px",
          }}
        >
          {movieList?.map((movie, index) => (
            <Card key={index} sx={{ minWidth: "230px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={transformDriveUrl(movie.imgUrl)}
                  alt={movie.title}
                />
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <Typography
                      gutterBottom
                      style={{ fontSize: "12px" }}
                      component="div"
                    >
                      Make Agree
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <MapPin style={{ height: "12px", width: "12px" }} />
                      <span style={{ fontSize: "10px" }}>{movie.cityName}</span>
                    </Typography>
                  </div>
                  <div style={{ marginTop: "5px", gap: "10px" }}>
                    <div style={{ fontSize: "11px" }}>
                      {formatDate(movie.date)}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      {movie.weather}
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
        <Upcoming />
    </div>
  );
};

export default MovieList;
