import React from 'react'


class QuoteBox extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            quote: "",
            quoteList: []
        }
    }
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


            </box>
        </div>
        </div>
    )
  }
}

export default react
