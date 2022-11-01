import { createSlice } from "@reduxjs/toolkit";
import { fetchWather } from "./mainAsync";

const initialState = {
    data: []
}

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWather.fulfilled, (state, action) => {
            console.log(action.payload)
            state.data = action.payload
        })
    }
})

export default mainSlice.reducer