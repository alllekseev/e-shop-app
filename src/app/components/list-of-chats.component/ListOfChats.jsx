import styles from "./list-of-chats.module.scss";
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField} from "@mui/material";
import {useState} from "react";
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import {Link} from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export function ListOfChats({onAddChat, chats}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat({
      id: nanoid(),
      name: value
    })
    setValue('')
  }

  return (
    <>
      <div className={styles.wrapperListOfChats}>
        <div className={styles.listOfChatsSearch}>
          <h2 className={styles.h2}>List of chats</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <TextField
            className={styles.textField}
            color="primary"
            type="text"
            label="Enter chat name"
            value={value}
            onChange={handleChange}
            variant="outlined"
          />
          <Button variant="contained">Create Chat</Button>
        </form>
        <List>
          {chats.map((chat) => (
            <Link to={`/chats/${chat.name}`} key={chat.id}>
              <ListItem disablePadding sx={{height: 60}} key={chat.id}>
                <ListItemButton className={styles.listItemButton} sx={{height: 60}} key={chat.id}>
                  <div className={styles.listItemButtonContent}>
                    <ListItemIcon>
                      <ChatIcon className={styles.colorIcon}></ChatIcon>
                    </ListItemIcon>
                    <ListItemText className={styles.listItemButton}>{chat.name}</ListItemText>
                  </div>
                  <ListItemButton className={styles.deleteButton}>
                    <ListItemIcon>
                      <DeleteOutlineIcon className={styles.colorIcon}></DeleteOutlineIcon>
                    </ListItemIcon>
                  </ListItemButton>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </>
  )
}

ListOfChats.propTypes = {
  chats: PropTypes.array
}
