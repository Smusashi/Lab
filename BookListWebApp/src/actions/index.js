export function selectBook(book){
  //SelectBook is an actionCreator, must return an actions
  // an object with a type property
  return {
  //Actions have 2 values : type and payload, type describes purpose of action
  //Type: Uppercase String that describes purpose of action
  //Payload: More info about the action
    type: 'BOOK_SELECTED',
    payload: book
  };
}
