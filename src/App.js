import React from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

const COLORS = ["PaleVioletRed", "MistyRose", "BlueViolet", "Thistle", "HoneyDew", "purple", "MediumSlateBlue", "Lavender"];

const pickRandomColor = () => {
  return COLORS[Math.round(Math.random() * (COLORS.length - 1))]
};

const pickRandomQuote = () => {
  let index = Math.round(Math.random() * (quotes.length - 1));
  return quotes[index];
};

class App extends React.Component {

  constructor(props) {
    super(props);
    const quote = pickRandomQuote();
    this.state = {
      quote: quote.quoteText,
      author: quote.author,
      color: pickRandomColor()
    }
  }

  onNewQuoteClick = () => {
    //update state
    const quote = pickRandomQuote();
    this.setState({
      quote: quote.quoteText,
      author: quote.author,
      color: pickRandomColor()
    })
  }

  render() {
    const { quote, author, color } = this.state

    return (
      <div className="background" style={{ backgroundColor: this.state.color }}>
        <div className="container">
          <QuoteAndAuthor
            onClick={this.onNewQuoteClick}
            quote={quote}
            author={author}
            color={color}
          />
        </div>
      </div>
    )
  }

}

export default App;
