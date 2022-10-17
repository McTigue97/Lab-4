import React from "react";
//imports books.js from components
import { Books } from './books';
//imports axios which will be used to intercept HTTP requests and response
import axios from 'axios';

export class Read extends React.Component{


    //when this runs it will become visible 
    componentDidMount() {

        //axios will make http request to the link
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')

        //when response comes back it will update the state and return it to books
        .then((response)=>{
            this.setState({books:response.data})
        })
        //if there an error console will show the error
        .catch((error)=>{
            console.log(error);
        })
    }

    //state has an array called books
    state = {
        books:[]
    };


//render will return our display
    render(){
        return(
            <div>
                <h3>Hello from my Read Component!</h3>
                {/* Books component is displayed which states an array*/}
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}