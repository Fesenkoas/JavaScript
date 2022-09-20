import { creatDeck } from "../../utils/contants";
import { setCardCPU, setCardUser } from "../reducer/gameReducer";

export const unitCards = () => {
  return (dispatch) => {
    const arrCards = creatDeck();

    arrCards.sort(() => Math.random() - 0.5);

    dispatch(setCardCPU(arrCards.slice(0, arrCards.length / 2)));
    dispatch(setCardUser(arrCards.slice(arrCards.length / 2, arrCards.length)));
  };
};
