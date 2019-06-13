import {
  SET_EMAILS
} from '../types'

import axios from 'axios'

const apiKey = '88430279a99cc36ee6e6300683783bc89fbc5754'
const apiPrefix = 'https://api.hunter.io/v2/'

export const getEmails = (email) => dispatch => {
  axios
    .get(`${apiPrefix}domain-search?domain=${email}&api_key=${apiKey}`)
    .then(res => {
      dispatch({
        type: SET_EMAILS,
        payload: res.data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
}