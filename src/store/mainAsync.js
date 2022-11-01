import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api"

export const fetchWather = createAsyncThunk('users/fetchData',
    async () => await api.fetchWather()
)