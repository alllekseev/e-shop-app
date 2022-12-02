import {Form} from "./components/classes/Form";
import {Form as FormFunc} from "./components/func/Form";
import {useState} from "react";
export function App() {
    const [toggle, setToggle] = useState(true);
    const [arr] = useState([{name: 'Biba'}, {name: 'Boba'}, {name: 'Giga'}, {name: 'Goga'},])

    return (
        <>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
            {toggle && <FormFunc title='Function Component' />}
            <ul>
                {arr.map((item) => (
                    <li key={item.name.toString()}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}