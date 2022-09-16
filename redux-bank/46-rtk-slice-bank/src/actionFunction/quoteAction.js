import { putQuote } from "../reducers/quoteReducer"

export const  fetchQuoteAction = () =>{
    return dispatch =>{
        dispatch(putQuote('Loading...'))
        fetch('https://api.kanye.rest')
        .then(responce => responce.json())
        .then(body => dispatch(putQuote(body.quote)))
        .catch(e => dispatch(putQuote('Error')))
    }
}