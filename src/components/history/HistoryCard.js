import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const HistoryCard = ({ id, name, subtitle }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 300,
        }}
      >
        <CardContent
          sx={{
            maxWidth: 300,
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="mainContent"
            style={{
              display: "flex",
              flex: "1 0 auto",
              alignItems: "flex-start",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              <b>{subtitle}</b>
            </Typography>
            {/* <Typography
                        sx={{
                          fontSize: 12,
                          marginTop: "16px",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {subtitle}
                      </Typography> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryCard;
