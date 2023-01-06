import styles from "./list-of-chats.module.scss";
import {Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField} from "@mui/material";
import {useState} from "react";
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../../store/messages/actions";
import {selectChat} from "../../store/messages/selectors";
export function ListOfChats() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const chats = useSelector(selectChat, (prev, next) => prev.length === next.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChat(value))
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
            onChange={(e) => setValue(e.target.value)}
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
                  <ListItemButton onClick={() => dispatch(deleteChat(chat.name))} className={styles.deleteButton}>
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
