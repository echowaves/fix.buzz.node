import axios from 'axios'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types'

export const signinUser = ({email, password}) => {
  console.log(process.env.API_URL)

  return (dispatch) => {
    console.log("API_URL: ", `${process.env.API_URL}/signin`)
    // Submit email/password to the server
    axios.post(`${process.env.API_URL}/signin`, {email, password})
    .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      })


    // if request is bad...
    // - Show an error to the user
    dispatch({ type: AUTH_USER })

  }

}
