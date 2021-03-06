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
                    style = {{backgroundColor : color}}
                    onClick={() => {
                        window.open('https://twitter.com/intent/tweet/?text='
                        + encodeURIComponent(quote + '--' + author));
                    }}
                    type="submit"><i class="fab fa-twitter"></i></button>
                <button
                    className="tumblr-btn"
                    style = {{backgroundColor : color}}
                    onClick={() => {
                        window.open('https://tumblr.com')
                    }}
                    type="submit"><i class="fab fa-tumblr"></i></button>
                </div>
            </div>
        </div>
    )
}