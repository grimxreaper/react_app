import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const {quote, generateRandomQuote } = props;
    return (
        <div className="box">
            <div className="box-body">
                <p className="quote-text">{quote.quote}</p>
                <h6 className="author-text">{quote.author}</h6>
                <div className="buttons"> 
                <button
                    onClick={() => {generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i>New quote</button>
                <button
                    className="ml-3"
                    onClick={() => { generateRandomQuote(quotes);
                    window.open('https://twitter.com/intent/tweet/?text='
                    + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i>Share Quote</button>
                </div>
            </div>
        </div>
    )

}