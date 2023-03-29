import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { demoData } from "../../others/defaultdata";
import CardTemplate from "./CardTemplate";
import SliderIn from "../wrapper/Slider";
import NewCard from "../home/NewCard";
import { Button, FormControl, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditTypeName from "./EditTypeName";
import AlterNewCard from "../home/AlterNewCard";

const Cards = () => {
  const [editType, setEditType] = React.useState(false);
  const [updatedName, setUpdatedName] = React.useState(false);
  const bucketData = useSelector((state) => state.videos.VideosData.buckets);

  console.log("demo", bucketData);

//   useEffect(()=>{

      
//   },[editType])

  const handleEdit = (type) => {

    setEditType(true);
    setUpdatedName(type);

  }

  const handleClose = () => {
    setEditType(false);
  }

  return (
    <div>
    <AlterNewCard/>
      {bucketData.map((bucket, index) => (
        <div>
          <h1 style={{ margin: "30px 0px 20px 0px" }}>
            {bucket.name}
            <IconButton sx={{ position: "absolute", right: "10%" }}>
              <EditIcon onClick={() => handleEdit(bucket.name)} />
            </IconButton>
          </h1>
          <SliderIn>
            {bucket.vids.map((video, i2) => {
              return (
                <CardTemplate
                  name={video.name}
                  subtitle={video.subtitle}
                  id={video.id}
                  type={bucket.name}
                />
              );
            })}
          </SliderIn>
        </div>
      ))}
      <NewCard />
      <EditTypeName open={editType} handleClose={handleClose} type={updatedName}/>
    </div>
  );
};

export default Cards;
