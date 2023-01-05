import {useContext, useState} from "react";
import {ThemeContext} from "../../utils/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import {changeName, checkedCheckbox} from "../../store/profile/actions";


export function ProfilePage() {
  const {themeContext, toggleTheme} = useContext(ThemeContext)

  const name = useSelector((store) => store.name)
  const checkboxValue = useSelector((store) => store.checked)

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

      <input type="checkbox"
             onChange={(e) => dispatch(checkedCheckbox(e.target.checked))}/>
      <h3 style={{color: "#fff"}}>{checkboxValue ? 'true' : 'false'}</h3>
    </>
  )
}
