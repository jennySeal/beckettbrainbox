import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    isEmpty: true,
}

export const usernameSlice = createSlice({
    name: 'username',
    initialState, 
    reducers: {
        addUsername: (state, action) => {
            return {
                username: action.payload, 
                isEmpty: false,
            }
        }
    }
})

export const selectUsername = state => state.username;
export const {addUsername} = usernameSlice.actions;
export default usernameSlice.reducer;