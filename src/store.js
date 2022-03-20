import {configureStore} from '@reduxjs/toolkit';  

import usernameReducer from './slice_reducers/usernameSlice';

const reducer = {
    username: usernameReducer,
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store;