import { createSlice } from "@reduxjs/toolkit";

const defaultQuote = {
    text:"Winter is coming....."
}

const quoteSlice = createSlice({
    name: 'account',
    initialState: defaultQuote,
    reducers: {
        putQuote(quote, action) {
            quote.text = action.payload;
        }
    }
})

export const {putQuote} = quoteSlice.actions;
export default  quoteSlice.reducer;