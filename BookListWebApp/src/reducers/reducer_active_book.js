export default function(state = null, action) {
    switch(action.type) {
    case  'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}

// Line 1: state = null because we cannot return a state that is undefined
//
