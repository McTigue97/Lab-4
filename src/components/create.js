import React from "react";

export class Create extends React.Component{

    //constructor that will bind the methods
    constructor(){
        super();
        //binding to events
        this.handleSubmit = this.handleSubmit.bind(this);
        //binding for book title
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        //binding for book cover
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        //binding for book author
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        //when forem loads empty strings will be there
        this.state = {
            title:'',
            cover: '',
            author: ''
        }
    }

    //2 methods that will be invoked
    //will take an event as an argument 
    handleSubmit(e){
        e.preventDefault();
    //will display message in console
        console.log(`Button Clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        
        //will reset the states to 0
        this.setState({
            title:'',
            cover:'',
            author: ''
        })
    }

    //title is a variable 
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    //method for book cover
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    //method for book author
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

//render will return our display
    render(){
        return(
            <div>
                <h3>Hello from my Create Component!</h3>
                {/*A submit form*/}
                <form onSubmit={this.handleSubmit}>
                {/*Book Title section*/}
                <div className="form-group">
                    {/*Label is Book Title*/}
                <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle}
                    />
                </div>

                {/*Book Cover section*/}
                <div className="form-group">
                    {/*Label is Book Cover*/}
                <label>Add Book Cover: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.cover}
                    onChange={this.onChangeBookCover}
                    />
                </div>

                 {/*Book Author section*/}
                <div className="form-group">
                    {/*Label is Book Author*/}
                <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.onChangeBookAuthor}
                    />
                </div>

                 <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}