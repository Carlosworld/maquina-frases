import React, { Component } from 'react';
import quotes from '../assets/quotes.json'

class QuoteReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: this.getRandomQuote()
    }
  }

  getRandomQuote() {
    const randomIdex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIdex]
  }

  generateNewQuote = () => { // Usar función flecha para enlazar correctamente
    const randomQuote = this.getRandomQuote();
    this.setState({
      randomQuote: randomQuote
    });
  }

  render() {
    return (
      <div id="quote-box">
        <span id="text">{this.state.randomQuote.quote}</span>
        <p id="author">- {this.state.randomQuote.author}</p>
        <button id="new-quote" onClick={this.generateNewQuote}>
          Get New Quote
        </button>
      </div>
    );
  }
}

export default QuoteReact;