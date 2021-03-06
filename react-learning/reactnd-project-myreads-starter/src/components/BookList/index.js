import React, { Component } from 'react';
import BookShelf from './BookShelf'



class BookList extends Component {

   


    render() {
       
      
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf></BookShelf>
                        <BookShelf></BookShelf>
                        <BookShelf></BookShelf>                        
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}

export default BookList;