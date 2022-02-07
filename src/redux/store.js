import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './state';

export default configureStore({
    reducer: {
       counter: counterReducer 
    }
})