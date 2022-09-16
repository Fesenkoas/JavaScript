import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const {balance} = useSelector(state => state.account)
  const {text} = useSelector(state => state.quote)

  return (
    <div>
      <h1 className='text-center text-uppercase'>Iron Bank of Braavos</h1>
      <h4 className='text-center text-uppercase'>{text}</h4>
      <h3 className='text-center text-uppercase'>Balance = {balance}</h3>
    </div>
  )

}

export default Balance