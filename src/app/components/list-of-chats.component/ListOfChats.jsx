import "./list-of-chats.scss";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useEffect, useState} from "react";
import uuid from "react-uuid";
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from "prop-types";
export function ListOfChats() {
  const [chats, setChats] = useState();

  useEffect(() => {
    setChats([
      {
        user: 'Bot',
        text: ''
      },
      {
        user: 'User 1',
        text: ''
      },
      {
        user: 'User 2',
        text: ''
      },
      {
        user: 'User 3',
        text: ''
      },
      {
        user: 'User 4',
        text: ''
      },
    ])
  }, [])

  return (
    <>
      <div className="wrapper-list-of-chats">
        <div className="list-of-charts-search">
          <h2>List of chats</h2>
        </div>
        <List>
          {chats?.map((chat) => (
            <ListItem disablePadding sx={{height: 60}} key={uuid()}>
              <ListItemButton className="list-item-button" sx={{height: 60}} key={uuid()}>
                <ListItemIcon>
                  <ChatIcon className="color-icon"></ChatIcon>
                </ListItemIcon>
                <ListItemText className="list-item-text">{chat.user}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}

ListOfChats.propTypes = {
  chats: PropTypes.array
}