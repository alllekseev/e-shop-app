import './app.scss';

import {ThemeProvider} from "@mui/material";
import {theme} from "../assets/theme/Theme.component";
import {NavbarComponent} from "./components/navbar.component/navbar.component";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main.page/main.page";
import {ProfilePage} from "./pages/profile.page/profile.page";
import {ChatsPage} from "./pages/chats.page/chats.page";
import {ListOfChats} from "./components/list-of-chats.component/ListOfChats";
import {MessageList} from "./components/message-list.component/MessageList";
import {useState} from "react";
import {nanoid} from "nanoid";

const defaultMessages = {
  default: [
    {
      author: 'User',
      text: 'one text'
    },
    {
      author: 'User',
      text: 'two text'
    },
  ]
}

export function App() {
  const [messages, setMessages] = useState(defaultMessages)

  const chats = Object.keys(messages).map((chat) => ({
    id: nanoid(),
    name: chat
  }))

  const onAddChat = (newChat) => {
    setMessages({
      ...messages,
      [newChat.name]: []
    })
    newChat.name = '';
  }

  const onAddMessage = (chatId, newMessages) => {
    setMessages({
      ...messages,
      [chatId]: [newMessages, ...messages[chatId]]
    })
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<NavbarComponent/>}>
            <Route index element={<MainPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="chats"
                   element={
                     <ChatsPage
                       chats={chats}
                       messages={messages}
                       onAddMessages={onAddMessage}
                       onAddChat={onAddChat}
                     />
                   }>
              <Route index element={<ListOfChats chats={chats} onAddChat={onAddChat}/>}/>
              <Route path=":chatId" element={<MessageList/>}/>
            </Route>
          </Route>

          <Route path="*" element={<h1>404 Page not found!</h1>}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}
