

const Name = ({values, handleChange}) => {
    
 

    return (
        <div>
            <form>
            <label htmlFor="username"><h3>What is your name?</h3>
            <input id="username" name="username" type="text" value={values.username}  onChange={handleChange}/>
            </label>
            <button type="button">Submit</button>

            </form>
        </div>
    )
}

export default Name;