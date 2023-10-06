import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function ChatCard({ name, message, hour, img, id, showMessages }) {
  return (
    <Box
      sx={{
        padding: "20px 20px 0 20px",
        transition: "0.4s",
        "&:hover": {
          cursor: "pointer",
          background: (theme) => theme.palette.secondary.main,
          transition: "0.5s",
        },
      }}
      onClick={() => showMessages(id)}
    >
      <Stack direction="row" gap="20px">
        <Avatar alt="avatar" src={img} />
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Stack justifyContent="center" sx={{ marginBottom: "20px" }}>
              <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
              <Typography
                variant="caption"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                {message}
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="caption"
                sx={{ color: (theme) => theme.palette.grey[400] }}
              >
                {hour}
              </Typography>
            </Stack>
          </Stack>

          <Divider />
        </Box>
      </Stack>
    </Box>
  );
}

export default ChatCard;
