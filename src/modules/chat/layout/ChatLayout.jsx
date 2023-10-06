import { Grid, Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import UserMenu from "../components/UserMenu";
import UsersList from "../components/UsersList";
import ChatList from "../components/ChatsList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRequest } from "../../../services/baseRequest";
import logoutUnauthorized from "../../../services/logoutUnauthorized";
import ConfigMenu from "../components/ConfigMenu";

function ChatLayout() {
  const [showMessages, setShowMessages] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);

  const navigate = useNavigate();

  const { id: userId, avatar } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    authRequest("get", "/api/v1/users")
      .then((res) => setUsers(res.data.filter((user) => user.id !== userId)))
      .catch((error) => {
        logoutUnauthorized(error, () => {
          navigate("/auth/login");
        });
      });

    authRequest("get", `/api/v1/conversations/${userId}`)
      .then((res) => setConversations(res.data))
      .catch((error) =>
        logoutUnauthorized(error, () => {
          navigate("/auth/login");
        })
      );
  }, []);

  const handleBack = () => {
    setShowMessages(true);
    setShowUsers(false);
    setShowConfig(false);
  };

  const handleOnCreateConversation = () => {
    setShowMessages(false);
    setShowUsers(true);
    setShowConfig(false);
  };

  const handleOnCreateGroup = () => {
    console.log("creando grupo");
  };

  const hanldeConfigMenu = () => {
    setShowConfig(true);
    setShowMessages(false);
    setShowUsers(false);
  };

  const onSelectUser = (participantId) => {
    const body = { userId, participantId };
    authRequest("post", "/api/v1/conversations", body).then((res) => {
      authRequest("get", `/api/v1/conversations/${userId}`, null).then((res) =>
        setConversations(res.data)
      );
      setShowUsers(false);
      setShowMessages(true);
    });
  };

  const openMessages = (id) => {
    navigate(`/chats/conversation/${id}`);
  };

  return (
    <Grid
      container
      sx={{
        background: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <Grid item xs={3} sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            background: (theme) => theme.palette.secondary.dark,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <UserMenu
            onConfig={hanldeConfigMenu}
            onCreateConversation={handleOnCreateConversation}
            onCreateGroup={handleOnCreateGroup}
          />
        </Box>
        <Stack
          sx={{
            overflowY: "scroll",
            maxHeight: "calc(100% - 70px)",
            height: "100%",
          }}
        >
          {showMessages && (
            <ChatList chats={conversations} showMessages={openMessages} />
          )}
          {showUsers && (
            <UsersList
              users={users}
              onCancel={handleBack}
              onSelectUser={onSelectUser}
            />
          )}
          {showConfig && <ConfigMenu onCancel={handleBack} avatar={avatar} />}
        </Stack>
      </Grid>
      <Grid item xs={9} sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "70px",
            borderLeft: (theme) => `1px solid ${theme.palette.grey[400]}`,
            background: (theme) => theme.palette.secondary.dark,
          }}
        />
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default ChatLayout;
