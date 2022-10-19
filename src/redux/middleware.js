import { showAlert } from "./actions";
import { CREATE_POST } from "./types"

const forbidden = ['spam', 'hello world', 'hi']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if(action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w));
        if(found.length) {
          return dispatch(showAlert('Нельзя использовать данное слово!'))
        }
      }
      return next(action)
    }
  }
}