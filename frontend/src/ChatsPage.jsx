import { PrettyChatWindow } from "react-chat-engine-pretty";
import React from "react";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={"4f17becf-6640-485b-9512-8d475dd08425"}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
