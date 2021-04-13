import React from 'react'



export default function QuoteAndAuthor(props) {

    const {author, quote, onClick, color} = props;
    return (

        <div className="box">
            <div className="box-body">
                <p className="quote-text">{quote}</p>
                <h6 className="author-text">{author}</h6>
                <div className="buttons"> 
                <button className="add-quote"
                    style = {{backgroundColor : color}}
                    onClick={onClick}
                    type="submit">New quote</button>
                <button

                    className="twitter-btn"
                    aria-label="twitter share button"
                    style = {{backgroundColor : color}}
                    onClick={() => {
                        window.open('https://twitter.com/intent/tweet/?text='
                        + encodeURIComponent(quote + '--' + author));
                    }}
                    type="submit"><i className="fab fa-twitter"></i></button>
                <button
                    className="tumblr-btn"
                    aria-label="tumblr share button"
                    style = {{backgroundColor : color}}
                    onClick={() => {
                        window.open('https://tumblr.com')
                    }}
                    type="submit"><i className="fab fa-tumblr"></i></button>
                </div>
            </div>
        </div>
    )
}