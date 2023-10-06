import { Alert, Box, Snackbar } from "@mui/material";
import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { request } from "../../../../services/baseRequest";

function RegisterPage() {
  const [open, setOpen] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitLogin = (formData) => {
    request("post", "/api/v1/users", formData)
      .then((res) => {
        setOpen(true);
      })
      .catch((error) => {
        setRequestError(true);
        setErrorMessage(error.response.data.original.detail);
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
          {open ? "Gracias por registrarte" : errorMessage}
        </Alert>
      </Snackbar>
      <RegisterForm onChange={onChange} onSubmit={submitLogin} />
    </Box>
  );
}

export default RegisterPage;
