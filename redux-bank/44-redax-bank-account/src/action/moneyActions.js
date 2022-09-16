export const DEPOSIT ='DEPOSIT'
export const WITHDRAW = 'WITHDRAW'

export const deposit = (sum) => {
  return { type: DEPOSIT, payload: sum };
};

export const withdraw = (sum) => {
  return { type: WITHDRAW, payload: sum };
};
