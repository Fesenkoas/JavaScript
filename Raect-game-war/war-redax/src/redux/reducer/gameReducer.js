import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardCPU: [],
  cardUser: [],
  compCard: 0,
  playerCard: 0,
  count: 0,
  length: 0,
  bool: true,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    reset(state, action) {
      state.bool = true;
      state.count = 0;
    },
    setCardCPU(state, action) {
      state.cardCPU = action.payload;
    },
    setCardUser(state, action) {
      state.cardUser = action.payload;
      state.length = action.payload.length - 1;
    },
    game(state, action) {
      state.count += action.payload;
      if (state.count !== state.length) {
        state.compCard = state.cardCPU[state.count];
        state.playerCard = state.cardUser[state.count];
      } else {
        state.bool = false;
      }
    },
  },
});

export const { setCardUser, setCardCPU, game, reset } = gameSlice.actions;
export default gameSlice.reducer;
