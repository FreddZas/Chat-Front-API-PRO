import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import Groups2Icon from "@mui/icons-material/Groups2";

function UserMenu({ onCreateConversation, onCreateGroup, onConfig }) {
  const { avatar, firstname, lastname } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <Box sx={{ width: "100%", padding: "5px 10px" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          onClick={() => {
            onConfig();
          }}
        >
          <Avatar src={avatar} />
          <Typography
            color="primary"
            sx={{ fontWeight: 700 }}
          >{`${firstname} ${lastname}`}</Typography>
        </Stack>
        <Stack direction="row" gap="15px">
          <IconButton color="primary" onClick={onCreateConversation}>
            <SmsIcon />
          </IconButton>
          <IconButton color="primary" onClick={onCreateGroup}>
            <Groups2Icon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default UserMenu;
