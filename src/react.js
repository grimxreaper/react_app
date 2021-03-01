import React from 'react'
import quotes from './QuoteDB';



class QuoteBox extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author
        }
    }

    addQuote(){
        //create item with unique ID
        //randomly pick a quote out of the list
        const newQuote={
            index: Math.floor(Math.random() * (quotes.length)),
            value: this.state.newQuote.slice()
            // arrayOfQuotes[id]
            // arrayOfAuthors[//use same ID!]
            //for (let i = 0; i < 4; i++) {
                quotes[index]
                authors[index]

                quotes[Math.floor(Math.random() * (quotes.length))]
            }
        };

    }

    {const quotes = ['quote one', 'quote two', 'quote three']}
//array of authors
const authors = ['author one', 'author two', 'author three']

  render () {
    return (
        <div>
            <div className="App">
            <box className="quotebox">
                <div className="quote" />

               

                <div className="author"/>

                

                <Link to="/" className="twitter-logo">

                </Link>

                <Link to="/" className="tumblr-logo">

                </Link>

                <button
                  onClick={() => this.addQuote()}
                >
                    New quote
                </button>


            </box>
        </div>
        </div>
    )
  }
}

export default react
