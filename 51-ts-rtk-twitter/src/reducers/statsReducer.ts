import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface StatsPayload{
    statsType:'followers'|'following',
    sum: number
}
const defaultStats = {
    followers: 0,
    following: 0
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: defaultStats,
    reducers: {
        changeStats(stats, action: PayloadAction<StatsPayload>){
            const res = stats[action.payload.statsType] + action.payload.sum;
            stats[action.payload.statsType] = res < 0 ? 0 : res
        }
    }
})

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer