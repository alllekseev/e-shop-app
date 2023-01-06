import {useEffect, useRef, useState} from "react";
import "./form.scss";
import PropTypes from "prop-types";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch} from "react-redux";
import {addMessage} from "../../store/messages/actions";
import {useParams} from "react-router-dom";

export function Form() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const dispatch = useDispatch()
  const { chatId } = useParams()

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const handleMessage = (event) => {
    dispatch(addMessage(chatId, text))
    event.preventDefault();
    setText('')
    inputRef.current?.focus();
  }
  return (
    <>
      <div className="form">
        <div className="input-group">
          <form onSubmit={handleMessage} className="form-container">
            <TextField
              id="standard-basic"
              label="Enter message"
              variant="standard"
              type="text"
              value={text}
              inputRef={inputRef}
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="contained"
                    type="submit"
                    endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}
