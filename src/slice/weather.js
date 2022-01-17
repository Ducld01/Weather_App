import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    weather: [],
    error: '',
    status: '',
    current: []
}


export const fetchWeather = createAsyncThunk("weather/data",
    async (location) => {
        const res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=0e84bade8a4859acbc8d2edfa6d2d9a2`)
        // console.log(res);
        const {lat,lon} = res.data.coord
        const current = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=0e84bade8a4859acbc8d2edfa6d2d9a2`)
        // console.log(current);
        const weather = {current:current.data, res:res.data}
        return weather
    }

)



const weatherSlice = createSlice({
    'name': 'weather',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchWeather.fulfilled, (state,action) =>{
                state.status = 'succesfuly';
                state.weather = action.payload.res
                state.current = action.payload.current
            })
            .addCase(fetchWeather.rejected, (state,action) =>{
                state.status = 'failed';
                state.error = action.error.name;
            })
    }
    // extraReducers: {
    //     [fetchWeather.pending]: (state) => {
    //         state.status = 'pending'
    //     },
    //     [fetchWeather.fulfilled]: (state,action) => {
    //         state.status = 'succesfuly';
    //         state.weather = action.payload.data
    //     },
    //     [fetchWeather.rejected]: (state,action) => {
    //         state.status = 'failed';
    //         state.error = action.error.name;
    //     },
    //     [fetchCurrentWeather.pending]: (state) => {
    //         state.status = 'pending'
    //     },
    //     [fetchCurrentWeather.fulfilled]: (state,action) => {
    //         state.status = 'succesfuly';
    //         console.log(action.payload);
    //         state.current = action.payload.data
    //     },
    //     [fetchCurrentWeather.rejected]: (state,action) => {
    //         state.status = 'failed';
    //         state.error = action.error.name;
    //     },
    // }
})


export default weatherSlice.reducer;