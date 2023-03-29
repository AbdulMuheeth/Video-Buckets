import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <AppBar
        component="nav"
        sx={{ position: "relative", marginBottom: "1%", background: "#01497C" }}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img
              src={"/menu.png"}
              alt={"Hamburger Menu"}
              style={{ fontSize: "10px" }}
              width="25"
              height="25"
            />
            &ensp; Video Buckets
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Video Buckets
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              key={"home"}
              sx={{ color: "#fff" }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              key={"history"}
              sx={{ color: "#fff" }}
              onClick={() => navigate("/history")}
            >
              History
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
