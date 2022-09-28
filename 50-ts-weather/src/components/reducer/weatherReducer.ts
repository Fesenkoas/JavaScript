import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message:"Enter city name",
  info: {},
  loading:''
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    loading(state, action){
      state.message = action.payload
    },
    setWeather(state, action) {
      const data = action.payload;
      state.message = null;
      state.info = {
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      };

    },
  },
});

export const { loading, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
