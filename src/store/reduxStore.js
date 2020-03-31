import { createStore } from 'redux'

function counterReduce(state=0, action){
  switch(action.type){
    case 'add':
      return state+1;
    case 'minus':
      return state-1;
    default:
      return state;
  }
}
const store = createStore(counterReduce)
export default store;