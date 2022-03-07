import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const MenuBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{justifyContent: "space-between"}}>
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  navigate("/about");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About
              </Button>
              <Button
                onClick={() => {
                  navigate("/dashboard");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Dashboard
              </Button>
              <Button
                onClick={() => {
                  navigate("/new");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Add Growth
              </Button>
              <Button
                onClick={() => {
                  navigate("/history");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                History
              </Button>
              <Button
                onClick={() => {
                  navigate("/public");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Public
              </Button>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ my: 2, color: "white", display: "block", alignSelf: "flexend" }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuBar;
