import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';
import userReducer from './userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer,
    },
});