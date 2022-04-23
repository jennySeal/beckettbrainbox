import { Link } from "react-router-dom";


const Name = ({gotAPlayer}) => {
    

    return (
        <div>
            <form onSubmit={gotAPlayer}>
            <label htmlFor="usernameInput">
            <h3>First things first ... What is your name?</h3>
            <input type="text" id="username" name="username" placeholder="" required autoComplete='off' autoFocus />
            </label>         
            </form>
        </div>
    )
}

export default Name;