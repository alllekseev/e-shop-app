import {useEffect} from "react";
import styles from "./chats.page.module.scss";

import {Form} from "../../components/form.component/Form";
import {MessageList} from "../../components/message-list.component/MessageList";
import {AUTHOR} from "../../constants/Author";
import {ListOfChats} from "../../components/list-of-chats.component/ListOfChats";
import {Navigate, useParams} from "react-router-dom";

export function ChatsPage({onAddChat, onAddMessages, messages, chats}) {
  // const [messages, setMessages] = useState([]);
  const {chatId} = useParams()

  // const addMessage = (newMessage) => {
  //   if (newMessage.text) {
  //     setMessages([newMessage, ...messages])
  //   }
  // }

  useEffect(() => {
    if (chatId && messages[chatId].length > 0) {
      console.log(messages[chatId])
      const latMessage = messages[chatId].at(0);
      if (latMessage.author !== AUTHOR.bot) {
        setTimeout(() => {
          onAddMessages(chatId, {
            author: AUTHOR.bot,
            text: 'Message sent!'
          })
        }, 1500)
      }
    }
  }, [messages, chatId])

  const handleAddMessage = (message) => {
    if (chatId) {
      onAddMessages(chatId, message)
    }
  }

  if(chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />
  }

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>Welcome to chat!</h1>
        </header>
        <main className={styles.main}>
          <div className="main__list-of-chats">
            <ListOfChats chats={chats} onAddChat={onAddChat}/>
          </div>
          <div className={styles.main__currentChatContainer}>
            <MessageList messages={chatId ? messages[chatId] : []}/>
            <Form handleAddMessage={handleAddMessage}/>
          </div>
        </main>
      </div>
    </>
  )
}
