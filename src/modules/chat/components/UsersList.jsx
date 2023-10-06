import React from "react";
import { Stack, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import UserCard from "./UserCard";

function UsersList({ users, onCancel, onSelectUser }) {
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
        <Typography>Nuevo Chat</Typography>
      </Stack>
      {users.map((user) => (
        <UserCard
          id={user.id}
          image={user.avatar}
          firstname={user.firstname}
          lastname={user.lastname}
          message={user.description}
          onSelectUser={onSelectUser}
        />
      ))}
    </>
  );
}

export default UsersList;
