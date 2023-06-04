// import { message } from "antd";
// import ChatBoxReciever, { ChatBoxSender } from "./componen/Chat";
// import InputText from "../component/InputText";

import ChatConatiner from "../component/ChatContainer";

function ChatDokter() {
  return (
    <>
      <div style={{ backgroundColor: "#F2F1F1 ", height: "100vh" }}>
        <h1>SuperChat</h1>
        {/* <ChatBoxReciever user={"tara"} avatar={"https://picsum.photos/200/300"} message={"hello tara"} />
          <ChatBoxSender user={"mey"} avatar={"https://picsum.photos/id/237/200/300"} message={"how are you doing ?"} />
          <InputText addMessage={() => console.log(message.message)} /> */}
        <ChatConatiner />
      </div>
    </>
  );
}
export default ChatDokter;
