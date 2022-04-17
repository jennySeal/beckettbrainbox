import { Link } from "react-router-dom";

const Name = ({name:name, hasStarted, handleSubmit}) => {


    return (
        <div>
            <form>
            <label htmlFor="usernameInput"><h4>First things first ...<br/>What is your name?</h4>
            <input type="text" id="username" name="username" placeholder="" required autoComplete='off' autoFocus onChange={handleSubmit}/>
            </label>
            <br/>
            
                <button type="submit" value="Submit"><Link to="/welcome/">Submit</Link></button> 
         
            </form>
        </div>
    )
}

export default Name;