import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import UserLogin from "./UserLogin";
import InputText from "./InputText";
import ChatBoxReciever from "./Chat";
import { ChatBoxSender } from "./Chat";

export default function ChatConatiner() {
  let socketio = socketIOClient("http://localhost:5001");
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  useEffect(() => {
    socketio.on("chat", (senderChats) => {
      setChats(senderChats);
    });
  });

  function sendChattoSockets(chat) {
    socketio.emit("chat", chat);
  }

  function addMessage(chat) {
    const newChat = { ...chats, user, avatar };
    setChats([...chats, newChat]);
    sendChattoSockets([...chats, newChat]);
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  }
  function ChatsList() {
    return chats.map((chat, index) => {
      if (chat.user == user) return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />;
      return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />;
      {
      }
    });
  }
  return (
    <>
      <div>
        {user ? (
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <h4>Username: {user}</h4>

              <p onClick={() => logout()} style={{ color: "blue", cursor: "pointer" }}>
                Log Out
              </p>
            </div>
            <ChatsList />

            <InputText addMessage={addMessage} />
          </div>
        ) : (
          <UserLogin setUser={setUser} />
        )}
      </div>
    </>
  );
}
