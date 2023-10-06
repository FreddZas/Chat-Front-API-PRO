import React from "react";
import { Box, Typography, Stack, Avatar } from "@mui/material";

function UserCard({ id, image, firstname, lastname, message, onSelectUser }) {
  console.log(message);
  return (
    <Box
      sx={{
        padding: "20px 7px",
        transition: "0.5s",
        "&:hover": {
          cursor: "pointer",
          background: (theme) => theme.palette.primary.dark,
          transition: "0.5s",
        },
      }}
      onClick={() => onSelectUser(id)}
    >
      <Stack direction="row" gap="20px">
        <Avatar src={image} />
        <Box>
          <Typography>{`${firstname} ${lastname}`}</Typography>
          <Typography
            variant="caption"
            color={(theme) => theme.palette.grey[500]}
          >
            {message}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default UserCard;
