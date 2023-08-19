import React, { Component } from 'react';
import quotes from '../assets/quotes.json'

class QuoteReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: this.getRandomQuote(),
      backgroundColor: '#333',
      textColor: '#333'
    }
  }

  getRandomQuote() {
    const randomIdex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIdex]
  }

  generateNewQuote = () => { // Usar función flecha para enlazar correctamente
    const randomQuote = this.getRandomQuote();
    this.setState({
      randomQuote: randomQuote,
      backgroundColor: this.getRandomColor()
    });
  }

  getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33C6', '#33C6FF', '#C6FF33'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
  }

  tweetQuote = () => {
    const { quote, author } = this.state.randomQuote;
    const tweetText = `"${quote}" - ${author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
  }

  render() {
    const { backgroundColor } = this.state;

    const styles = {
      backgroundColor,
      color: backgroundColor
    }
    return (
      <div style={styles}>
        <div className="quote-box">
          <div className="quote-text">
            <i className="fa fa-quote-left"> </i><span id="text"> {this.state.randomQuote.quote}</span>
          </div>
          <div className="quote-author">
            - <span id="author">{this.state.randomQuote.author}</span>
          </div>
          <div className="buttons">
            <a
              className="button" id="tweet-quote"
              href='javascript:void(0);' // Evita que la página se recargue al hacer clic
              onClick={this.tweetQuote}
            >
               <i class="fa fa-twitter"></i>
            </a>
            <button className="button" id="new-quote" onClick={this.generateNewQuote}>New quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteReact;