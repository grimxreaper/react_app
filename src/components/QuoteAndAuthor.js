import React from 'react'
import quotes from '../QuoteDB'


export default function QuoteAndAuthor(props) {

    const {quote, addQuote, changeBg, colors } = props;
    return (

        <div className="box">
            <div className="box-body">
                <p className="quote-text">{quote.quote}</p>
                <h6 className="author-text">{quote.author}</h6>
                <div className="buttons"> 
                <button className="add-quote"
                    onClick={() => { addQuote(quotes); changeBg(colors) }}
                    type="submit">New quote</button>
                <button
                    className="twitter-btn"
                    onClick={() => { addQuote(quotes);
                    window.open('https://twitter.com/intent/tweet/?text='
                    + encodeURIComponent(quote.quote + '--' + quote.author));
                    }}
                    type="submit"><i class="fab fa-twitter"></i></button>
                <button
                    className="tumblr-btn"
                    // style = {{backgroundColor : changeBg(colors)}}
                    // style = {{backgroundColor : this.changeBg(colors)}}
                    onClick={() => { addQuote(quotes);
                    window.open('https://tumblr.com')
                    }}
                    type="submit"><i class="fab fa-tumblr"></i></button>
                </div>
            </div>
        </div>
    )
}