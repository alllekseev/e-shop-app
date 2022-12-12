import {useEffect, memo, useState} from "react";
import {Button} from "../ui/Button";

export const Child = memo(() => {
  const [count, setCount] = useState(0)
  console.log('Child')
  useEffect(() => {
    console.log('Child did mount');
    // const interval = setInterval(() => {
    //   console.log('1')
    // }, 1000)

    return () => {
      console.log('Child unmount!')
      // clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    console.log('Child did mount!')
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>Child component</h2>
      <Button type="submit" className="btn" onClick={handleClick}>Click count</Button>
      <p>COUNT: {count}</p>
    </>
  )
})