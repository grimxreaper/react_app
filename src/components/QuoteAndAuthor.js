import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const {quote, generateRandomQuote } = props;
    return (
        <div className="box">
            <div className="box-body">
                <p className="quote-text">{quote.quote}</p>
                <h6 className="author-text">{quote.author}</h6>
                <button
                    onClick={() => {generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i>New quote</button>
            </div>
        </div>
    )

}