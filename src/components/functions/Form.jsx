import {useState, useEffect, useCallback, useRef} from "react";
import {Child} from "./components/Child";
import {Button} from "./ui/Button";

export function Form(props) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const myRef = useRef()

  console.log('Parent')

  useEffect(() => {
    console.log('Parent did mount!')
    console.log(myRef)
  }, [])

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [setCount])

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={handleShow}>Show</button>
      <Button type="submit" className='btn' onClick={handleClick}>Click count</Button>
      <p ref={myRef}>COUNT: {count}</p>
      {show && <Child handleClick={handleClick} />}
    </>
  )
}