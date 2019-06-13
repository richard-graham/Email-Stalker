import {
  SET_EMAILS
} from '../types'

const initialState = {}

export default function(state = initialState, action){
  switch(action.type){
    case SET_EMAILS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}