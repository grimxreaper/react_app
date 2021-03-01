import React, { Component } from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
  }

  addQuote = (arr) => {
    let index = Math.floor(Math.random() * (quotes.length));
    let newQuote = quotes[index]
    //update state
    this.setState({
      quote: newQuote.quote, 
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)
  }

  // shuffleQuotes = (arr) => {
  //   return arr.sort(function () { return 0.5 - Math.random() });
  // }

  render () {
    return (
      <div className="container">
        <QuoteAndAuthor generateRandomQuote = {this.generateRandomQuote}
        quote={this.state}
        />
      </div>
    )
  }







}