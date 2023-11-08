import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/track";


export const store = configureStore({
    reducer: {
        // audioplayer = название, playerSlice = редюсер. Редюсеров может быть несколько
        tracks: tracksReducer,
    },
});