import React from "react";
import ChatLayout from "../layout/ChatLayout";
import { Box } from "@mui/material";

function Chat() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
          backgroundImage:
            'url("https://images.vexels.com/content/197708/preview/hexagonal-blue-neon-pattern-design-51b90c.png")',
          backgroundSize: "cover",
          "&: after": {
            content: '""',
            backgroundColor: "rgba(151, 51, 255, 0.7)",
            width: "100%",
            height: "100%",
            position: "absolute",
            backdropFilter: "blur(7px)",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "90%",
          height: "85%",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "auto",
          borderRadius: "7px",
          overflow: "hidden",
        }}
      >
        <ChatLayout />
      </Box>
    </Box>
  );
}

export default Chat;
