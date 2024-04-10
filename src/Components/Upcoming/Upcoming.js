import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { MoveRight } from "lucide-react";
import axios from "axios";
import { transformDriveUrl } from "../../lib/utils";
import { MapPin } from "lucide-react";
import Grid from "@mui/material/Grid";

const Upcoming = () => {
  const [upcoming, setUpcoming] = React.useState([]);
  React.useEffect(() => {
    axios.get(process.env.REACT_APP_UPCOMING_URL)
      .then((response) => {
        console.log(response.data);
        setUpcoming(response.data.events);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "10px",
          marginLeft: "5%",
          marginTop: "2%",
          fontWeight: "bold",
        }}
      >
        <span>Upcoming Event</span>
        <MoveRight />
      </div>
      <Grid container spacing={1} style={{ marginLeft: "5%" }}>
        {upcoming?.map((event) => {
          return (
            <Grid item xs={12} sm={6} md={4} style={{ marginBottom: "20px" }}>
              <Card
                key={event.id}
                style={{
                  width: "80%",
                  height: "100%",
                  marginTop: "5%",
                  borderRadius: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    image={transformDriveUrl(event.imgUrl)}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {event.eventName}
                    </Typography>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                      <div>
                        <Typography variant="body2" color="text.secondary">
                          <MapPin size={13} style={{ marginRight: "10px" }} />
                          {event.cityName}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" color="text.secondary">
                          {event.weather}
                        </Typography>
                      </div>
                    </div>

                    {/* <Typography variant="body2" color="text.secondary">
                          <span>{event.location}</span>
                      </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Upcoming;
