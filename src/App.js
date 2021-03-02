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
}

  addQuote = (arr) => {
    let index = Math.floor(Math.random() * (quotes.length));
    let newQuote = quotes[index];
    //update state
    this.setState({
      quote: newQuote.quote, 
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)
  }

  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render () {
    return (
      <div className="container">
        <QuoteAndAuthor
        displayColor={this.randomColor} 
        addQuote = {this.addQuote}
        quote={this.state}
        />
      </div>
    )
  }

}

export default App;