import { useSelector} from "react-redux";
import { selectUsername } from "../slice_reducers/usernameSlice";


import {Link} from 'react-router-dom';

const Scoreboard = () => {
    const usernameState = useSelector(selectUsername)
    const scoreboardName = usernameState.username.username;
    console.log(scoreboardName)

   
    return (
        <div>
            <h5>{scoreboardName} is the winner</h5>
            <Link to="/">Back </Link>
        </div>
    )
}

export default Scoreboard;