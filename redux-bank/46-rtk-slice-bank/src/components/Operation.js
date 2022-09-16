import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchQuoteAction } from '../actionFunction/quoteAction';
import { deposit, withdraw } from '../reducers/accountReducer';


const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();
    const handleClickGetQuote = () =>{
      dispatch(fetchQuoteAction())
    } 
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary btn-lg' onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type='number'
                />
                <button className='btn btn-primary btn-lg' onClick={() => dispatch(deposit(sum))}>Deposit</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleClickGetQuote} className='btn btn-info btn-lg'>Get quote</button>
            </div>
        </div>
    )
}

export default Operation