import { Box, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { request } from "../../../../services/baseRequest";

function LoginPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitLogin = (formData) => {
    request("post", "/api/v1/users/login", formData)
      .then((res) => {
        setOpen(true);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/chats");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setRequestError(true);
        setErrorMessage(error.response.data.error);
      });
  };

  const onChange = (formData) => {
    console.log(formData);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Snackbar
        open={requestError || open}
        autoHideDuration={4000}
        onClose={() => setRequestError(false)}
      >
        <Alert severity={open ? "success" : "error"}>
          {open ? "Logeado" : errorMessage}
        </Alert>
      </Snackbar>
      <LoginForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default LoginPage;
