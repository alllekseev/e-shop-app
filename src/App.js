import {Message} from "./components/functions/message.component/Message";
// import {Form} from "./components/classes/Form";
// import {Form as FormFunc} from "./components/functions/Form";
import {useEffect, useRef, useState} from "react";

import "./app.scss";

export function App() {
  // const [toggle, setToggle] = useState(true)
  const inputRef = useRef(null);
  const [messageList, setMessageList] = useState([])

  const handleMessage = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      setMessageList([{author: 'Biba', text: inputRef.current.value}, ...messageList])
      inputRef.current.value = '';
    }
  }

  useEffect(() => {
    if (messageList.length > 0) {
      const latMessage = messageList.at(0);
      if(latMessage.author !== 'Bot') {
        setTimeout(() => {
          setMessageList([{author: 'Bot', text: 'Message sent!'}, ...messageList])
        }, 1500)
      }
    }
  })

  return (
    <>
      <div className="container">
        <Message title="Init E-shop!"/>
        <div className="messenger">
          {(messageList.length < 1) && <p className="messenger_placeholder">No messages yet!</p>}
          {messageList.length > 0 && <ul>
            {messageList.map((message, idx) => (
              <li key={idx}>
                <p>Author: {message.author}</p>
                <p>Message: {message.text}</p>
                <hr/>
              </li>
            ))}
          </ul>}
        </div>

        <div className="form">
          <div className="input-group">
            <form onSubmit={handleMessage}>
              <input type="text" ref={inputRef} placeholder=""/>
              <label>Enter message</label>
            </form>
          </div>
          <button type="submit" onClick={handleMessage} className="btn">Send message</button>
        </div>
      </div>
      {/*<button onClick={() => setToggle(!toggle)}>Toggle</button>*/}
      {/*<hr/>*/}
      {/*<h2>{toggle ? 'Function Component' : 'Classes Component'}</h2>*/}
      {/*{!toggle && <Form />}*/}
      {/*{toggle && <FormFunc title="Function Component!" />}*/}
    </>
  )
}