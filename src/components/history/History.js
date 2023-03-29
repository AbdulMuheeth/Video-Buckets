import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import HistoryCard from "./HistoryCard";

const History = () => {
  const videoHistory = useSelector((state) => state.history.history);
  console.log(videoHistory);

  return (
    <div className="container" style={{padding:"2%"}}>
      <h1 style={{marginButtom:'10px'}}> History </h1>
      <Grid
        container
        spacing={4}
        justifyContent={"center"}
        sx={{ padding: "8px" }}
      >
        {videoHistory.length != 0 ? (
          videoHistory.map((vid, i) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={i} sx={{}}>
                <HistoryCard
                  id={vid.id}
                  name={vid.name}
                  subtitle={vid.subtitle}
                />
              </Grid>
            );
          })
        ) : (
          <center>
            <p style={{fontSize:'50px',marginTop:'50px'}}> No videos </p>
          </center>
        )}
      </Grid>
    </div>
  );
};

export default History;
