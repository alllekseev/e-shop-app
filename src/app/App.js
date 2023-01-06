import './app.scss';

import {ThemeProvider} from "@mui/material";
import {theme} from "../assets/theme/Theme.component";
import {NavbarComponent} from "./components/navbar.component/navbar.component";
import {Route, Routes} from "react-router-dom";
import {ProfilePage} from "./pages/profile.page/profile.page";
import {ChatsPage} from "./pages/chats.page/chats.page";
import {ListOfChats} from "./components/list-of-chats.component/ListOfChats";
import {MessageList} from "./components/message-list.component/MessageList";
import {useState} from "react";
import {defaultContext, ThemeContext} from "./utils/ThemeContext";
import {Provider} from "react-redux";
import {store} from "./store";

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
  const [messages, setMessages] = useState(defaultMessages);
  const [themeContext, setThemeContext] = useState(defaultContext.themeContext);

  // const chats = Object.keys(messages).map((chat) => ({
  //   id: nanoid(),
  //   name: chat
  // }))

  // const onAddChat = (newChat) => {
  //   setMessages({
  //     ...messages,
  //     [newChat.name]: []
  //   })
  //   newChat.name = '';
  // }

  const onAddMessage = (chatId, newMessages) => {
    setMessages({
      ...messages,
      [chatId]: [newMessages, ...messages[chatId]]
    })
  }

  const toggleTheme = () => {
    setThemeContext(themeContext === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={{
            themeContext,
            toggleTheme
          }}>
            <Routes>
              <Route path='/' element={<NavbarComponent/>}>
                {/*<Route index element={<MainPage/>}/>*/}
                <Route index element={<ProfilePage/>}/>
                <Route path="chats"
                       element={
                         <ChatsPage
                           messages={messages}
                           onAddMessages={onAddMessage}
                         />
                       }>
                  <Route index element={<ListOfChats />}/>
                  <Route path=":chatId" element={<MessageList/>}/>
                </Route>
              </Route>

              <Route path="*" element={<h1>404 Page not found!</h1>}></Route>
            </Routes>
          </ThemeContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  )
}
