import {useContext, useState} from "react";
import {ThemeContext} from "../../utils/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import {changeName, toggleProfile} from "../../store/profile/actions";
import {selectName, selectVisible} from "../../store/profile/selectors";


export function ProfilePage() {
  const {themeContext, toggleTheme} = useContext(ThemeContext)

  const name = useSelector(selectName)
  const visible = useSelector(selectVisible)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(changeName(value))
    setValue('')
  }



  return (
    <>
      <h1>ProfilePage</h1>
      <p>'{themeContext === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2 style={{color: "#fff"}}>{name}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleChange}>Change name</button>
      <br/>

      <input type="checkbox"
             checked={visible}
             readOnly
             onChange={() => dispatch(toggleProfile())}/>
      <button>Change visible</button>
      <h3 style={{color: "#fff"}}>{visible ? 'true' : 'false'}</h3>
    </>
  )
}
