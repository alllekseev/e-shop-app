import "./message-list.scss"
import PropTypes from "prop-types";
import uuid from "react-uuid";
import PersonIcon from '@mui/icons-material/Person';

export function MessageList({messages}) {
  return (
    <>
      <div className="list-of-chats-wrapper">
        <div className="current-chart-header">
          <div className="current-chart-header__left">
            <PersonIcon className="current-chart-header__left_avatar"/>
            <div className="current-chart-header__left__info">
              <h3 className="current-chart-header__left__info_chat-name">
                Bot
              </h3>
              <p className="current-chart-header__left__info_note">
                last seen just now
              </p>
            </div>

          </div>
          <div className="current-chart-header__actions">
            <h4>Chat actions</h4>
          </div>
        </div>
        <div className="messenger">
          {(messages.length < 1) && <p className="messenger_placeholder">No messages yet!</p>}
          {messages.length > 0 &&
            messages.map((message) => (
              <div className="message-block" key={uuid()}>
                <p>{message.author}</p>
                <p>{message.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

