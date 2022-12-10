import {useEffect, useState} from "react";

import "./app.scss";
import {Form} from "./components/form.component/Form";
import {MessageList} from "./components/message-list.component/MessageList";
import {AUTHOR} from "./constants/Author";
import {ListOfChats} from "./components/list-of-chats.component/ListOfChats";

export function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    if (newMessage.text) {
      setMessages([newMessage, ...messages])
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      const latMessage = messages.at(0);
      if (latMessage.author !== AUTHOR.bot) {
        setTimeout(() => {
          setMessages([{author: AUTHOR.bot, text: 'Message sent!'}, ...messages])
        }, 1500)
      }
    }
  }, [messages])

  return (
    <>
      <div className="wrapper">
        <header>
          <h1>Welcome to chat!</h1>
        </header>
        <main className="main">
          <div className="main__list-of-chats">
            <ListOfChats/>
          </div>
          <div className="main__current-chat-container">
            <MessageList messages={messages}/>
            <Form addMessage={addMessage}/>
          </div>
        </main>
      </div>
    </>
  )
}