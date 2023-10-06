import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/auth/login");
  };
  return (
    <Box>
      <Typography variant="h1">Bienvenidos a academlo chat</Typography>
      <Typography
        varaint="body"
        color="secondary"
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={() => goLogin()}
      >
        Quiero empezar a chatear
      </Typography>
    </Box>
  );
}

export default Home;
