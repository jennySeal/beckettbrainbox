import { useSelector, useDispatch } from "react-redux";
import { addUsername, selectUsername } from "../slice_reducers/usernameSlice";
import UseForm from './UseForm';

const Name = () => {


    const [values, handleChange] = UseForm({username: ""})

    const username = useSelector(selectUsername)
    const dispatch = useDispatch()
    
    const login = (e) => {
        e.preventDefault()
        dispatch(addUsername(values))
        
    }

    return (
        <div>
            <h2>Who will be <br/>Brains of the Day?</h2>
            <form>
            <label htmlFor="usernameInput"><h3>What is your name?</h3>
            <input type="username" id="username" name="username" value={values.username} placeholder="" onChange={handleChange} required />
            </label>
            <button type="submit" value="Submit" onClick={login}>Submit</button>

            </form>
        </div>
    )
}

export default Name;