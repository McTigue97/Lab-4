import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component{
    render(){
        return(
            <div>
                {/*<h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl}></img>
                <p>{this.props.book.authors[0]}</p>*/}

                {/* Card Holder to tidy up the page */}
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                       <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>
                        </blockquote>
                    </Card.Body>
                    </Card>
            </div>
        );
    }
}