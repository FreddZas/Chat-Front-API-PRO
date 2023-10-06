import { Stack, IconButton, Typography, Avatar, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  top: "-50px",
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  height: "200%",
  overflow: "hidden",
  width: "200%",
});

function ConfigMenu({ onCancel, avatar }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    console.log(image);
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  console.log(image, preview);
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        gap="10px"
        sx={{
          color: "white",
          background: (theme) => theme.palette.secondary.dark,
          padding: "20px",
        }}
      >
        <IconButton sx={{ color: "white" }} onClick={onCancel}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography>Perfil</Typography>
      </Stack>
      <Stack gap="20px" sx={{ padding: "15px" }}>
        <Box>
          <Box
            sx={{
              margin: "auto",
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              overflow: "hidden",
              position: "relative",
              backgroundImage: `url(${preview ? preview : avatar})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={(e) => {
                console.log(e);
                const file = e.target.files[0];
                console.log(file);
                if (file && file.type.includes("image")) {
                  return setImage(file);
                }
                setImage(null);
              }}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default ConfigMenu;
