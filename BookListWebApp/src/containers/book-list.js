//Render a list of Books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}




//mapStateToProps
//State contains list of books and the active book
//Takes the state and whatever is returned will be props

//Whatever is returned will show up as mapStateToProps
//Whenever the 'state' changes
  //1. the container(BookList) will instantly rerender
  //2. The object in the state function will be assigned as props
  // to the component
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch); //Dispatch makes sure it gets passed to reducers?
}

// Promote BookList from a component to a container - it needs to know about
// new dispatch method, selectBook. Make it available
// as a prop.

//SEE REACT REDUX CONNECT DOCUMENTATION

export default connect(mapStateToProps, mapDispatchToProps)(BookList);        //connect(function)(component) == Glues react and redux together
//mapStateToProps is the container, we're passing BookList as the component
//Connect takes a function and component and produces a container

//React-Redux combines react and redux....
//Container = react component that has direct connection to the state managed by redux. Also called "Smart Components"

//App is dumb compnent; BookList and BookDetail are smart components because they use data
//When we make a container we want to export the containers
