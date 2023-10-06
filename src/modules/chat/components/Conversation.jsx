import React, { useEffect, useState } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { useParams } from "react-router-dom";
import { authRequest } from "../../../services/baseRequest";
import dayjs from "dayjs";

function Conversation() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    authRequest("get", `/api/v1/messages/conversation/${id}`).then((res) =>
      setMessages(res.data)
    );
  }, [id]);

  const sendMessage = () => {
    authRequest("post", `/api/v1/messages/conversation/${id}`, {
      content: message,
      senderId: user.id,
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100% - 70px)",
        maxHeight: "calc(100% - 70px)",
        backgroundImage:
          'url("https://img.freepik.com/premium-vector/abstract-colorful-lines-pattern-art-background_6735-2046.jpg")',
        backgroundSize: "cover,",
        overflowY: "scroll",
      }}
      justifyContent="space-between"
    >
      <Stack
        sx={{
          width: "calc(100% - 80px)",
          height: "95%",
          maxHeight: "100%",
          padding: "40px",
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7px)",
        }}
        gap="12px"
        justifyContent="flex-end"
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            hour={dayjs(message.createdAt).format("h:mma")}
            name={`${message.User.firstname} ${message.User.lastname}`}
            alignment={user.id === message.senderId}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        gap="20px"
        sx={{
          height: "5%",
          width: "calc(100%)",
          padding: "20px",
          background: (theme) => theme.palette.grey[200],
          position: "sticky",
          bottom: 0,
        }}
      >
        <TextField
          fullWidth
          placeholder="Escribe un mensaje"
          variant="outlined"
          color="secondary"
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton onClick={() => sendMessage()}>
          <SendIcon fontSize="large" style={{ color: "#8333FF" }} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Conversation;
