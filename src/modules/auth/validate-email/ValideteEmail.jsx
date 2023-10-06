import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import validate from "../../../assets/valid-email.png";
import { request } from "../../../services/baseRequest";

function ValidateEmail() {
  const [valid, setValid] = useState("");
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState(5);
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      request("post", "/api/v1/users/validate", { token })
        .then((res) => {
          console.log(res.status);
          setValid(res.status);
        })
        .catch((error) => {
          console.log(error.response.status);
          setValid(error.response.status);
        })
        .finally(() => {
          setCompleted(true);
        });
    }
  }, []);

  useEffect(() => {
    let interval;
    if (valid === 200) {
      if (time <= 0) {
        navigate("/auth/login");
      }
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, valid]);

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            height: "100vh",
          }}
        >
          <Typography variant="h3">Validando tu correo</Typography>
          {completed && valid === 200 && (
            <>
              <Typography variant="h4" color="secondary">
                El correo ha sido verificado
              </Typography>
              <Typography variant="body2" color="secondary">
                Se esta redirigiendo a login {time} si no eres redirigido has
                click
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  component="span"
                  color="primary"
                  onClick={() => {
                    navigate("/auth/login");
                  }}
                >
                  {" "}
                  aqui
                </Typography>
              </Typography>
            </>
          )}
          {completed && valid !== 200 && (
            <Typography variant="h4" color="secondary">
              Ocurrio un error
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            height: "100vh",
          }}
        >
          <img src={validate} alt="chat" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ValidateEmail;
