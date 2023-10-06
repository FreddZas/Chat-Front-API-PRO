import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import useForm from "../../../../hooks/useForm";
function LoginForm({ onSubmit, onChange }) {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, errors, formData } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    onChange(formData);
  }, [formData]);

  return (
    <Card
      elevation={7}
      sx={{
        borderRadius: "10px",
        width: { xs: "70%", md: "500px" },
        padding: "50px 20px",
      }}
    >
      <Stack direction="column" gap="30px">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="30px"
        >
          <Box sx={{ width: "50px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              style={{ width: "100%" }}
            />
          </Box>
          <Typography variant="h4" color="secondary">
            Academlo chat
          </Typography>
        </Stack>
        {/* <Typography>Nos alegra tenerte de vuelta</Typography> */}
        <TextField
          {...register("email")}
          error={errors.email}
          helperText={errors.email ? "Ingresa un correo válido" : ""}
          fullWidth
          label="Email"
          color="secondary"
        />
        <TextField
          {...register("password")}
          error={errors.password}
          fullWidth
          type={show ? "text" : "password"}
          label="password"
          helperText={errors.password ? "Ingresa una contraseña" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{ "&:hover": { cursor: "pointer" } }}
                position="end"
                onClick={() => setShow(!show)}
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          color="secondary"
        />
        <Button
          fullWidth
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => handleSubmit(onSubmit)}
        >
          {" "}
          Login{" "}
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Aún no tienes cuenta{" "}
          <Typography
            component="span"
            color="secondary"
            sx={{ fontWeight: 700, "&:hover": { cursor: "pointer" } }}
            onClick={() => {
              navigate("/auth/register");
            }}
          >
            Registrate
          </Typography>
        </Typography>
      </Stack>
    </Card>
  );
}

export default LoginForm;
