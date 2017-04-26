import firebase from 'firebase'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_ATTEMPT,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './types'

export const emailChanged = emailText => {
  return {
    type: EMAIL_CHANGED,
    payload: emailText
  }
}

export const passwordChanged = passwordText => {
  return {
    type: PASSWORD_CHANGED,
    payload: passwordText
  }
}

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_ATTEMPT })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((e) => {
        console.log(e)
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFailure(dispatch))
      })
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
}

const loginUserFailure = dispatch => {
  dispatch({ type: LOGIN_USER_FAILURE })
}
