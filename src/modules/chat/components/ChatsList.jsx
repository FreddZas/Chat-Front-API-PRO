import React from "react";
import ChatCard from "./ChatCard";

function ChatList({ chats, showMessages }) {
  const getParticipantInfo = (participants) => {
    const { id } = JSON.parse(localStorage.getItem("user"));
    const participant = participants.filter(
      (participant) => participant.UserId !== id
    )[0];
    const info = {
      name: `${participant.User.firstname} ${participant.User.lastname}`,
      avatar: participant.User.avatar,
    };
    return info;
  };
  return (
    <>
      {chats.map((chat) => {
        return (
          <ChatCard
            name={
              chat.Conversation.title ??
              getParticipantInfo(chat.Conversation.Participants).name
            }
            message={chat.message}
            hour={chat.hour}
            img={
              chat.Conversation.type === "group"
                ? chat.Conversation.conversationImage
                : getParticipantInfo(chat.Conversation.Participants).avatar
            }
            id={chat.ConversationId}
            showMessages={showMessages}
          />
        );
      })}
    </>
  );
}

export default ChatList;
