import React from "react";
import { BookItem } from "./bookitem";

export class Books extends React.Component{
    //render will return our display
    render(){
        //takes array of books and executes the function
        return this.props.books.map( (book)=>{
            return <BookItem book={book} key={book.isbn}></BookItem>
        }



        );
    }
}