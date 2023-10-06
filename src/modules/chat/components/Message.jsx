import { Typography, Box, Stack } from "@mui/material";
import React from "react";

function Message({ name, hour, content, alignment }) {
  return (
    <Stack
      direction="row"
      justifyContent={alignment ? "flex-end" : "flex-start"}
    >
      <Box
        sx={{
          maxWidth: "50%",
          padding: "3px 7px",
          borderRadius: "3px",
          background: (theme) =>
            !alignment
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        }}
      >
        {!alignment && <Typography variant="caption">{name}</Typography>}
        <Stack direction="row" gap="10px" alignItems="flex-end">
          <Box sx={{ width: "calc(100% - 55px)" }}>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.grey[100]}
            >
              {content}
            </Typography>
          </Box>
          <Box sx={{ width: "55px" }}>
            <Typography
              variant="caption"
              color={(theme) => theme.palette.grey[300]}
            >
              {hour}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Message;
