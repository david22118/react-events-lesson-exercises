import React, { Component } from 'react';
import Quote from './Quote';
class SpotCheck3 extends Component {

    constructor() {
        super()
        this.state = {
            quotes: [
                { id: "3bf00g", text: "Friends are like butter, always wrapped up in their own thing", likes: 24 },
                { id: "50xx11", text: "If you're going to walk in the rain, at least make sure it's raining", likes: 82 },
                { id: "50ggr2", text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.", likes: 33 }
            ]
        }
    }

    likeQuote = (quoteId) => {
    let newQuotes=[...this.state.quotes]
    let qoute= newQuotes.find(n=>n.id==quoteId)
    qoute.likes++
    this.setState({
        quotes:newQuotes 
    })
        //Update the state accordingly based on quoteId
 
    }

    //Load instances of `Quote` instead of rendering a `div`, and make sure to pass the correct props: 
    //a quote object and the `likeQuote` method

    render() {
        return (
            <div>
                {this.state.quotes.map(q => {
                    return (
                        <Quote key={q.id} id={q.id} likeQuote={this.likeQuote}  text={q.text} likes={q.likes} />
                    )
                })}
            </div>
        )
    }
}

export default SpotCheck3;
