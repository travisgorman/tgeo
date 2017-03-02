import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = React.createClass({
  getInitialState() {
    return {
      score: 0,
      clue: {
        question: '1st Tuesday after the 1st Monday in November',
        answer: 'Election Day',
      }
    }
  },
  
  render(){
    return (  
      <div className="App">
        <Header 
          tagline={"A game where we tell you answers, and you ask us questions"}
          question={this.state.clue.question}/>
        <Board />
        <Score 
          score={this.state.score} />
      </div>
    )
  }
})

// const Header = React.createClass({
//   render() {
//     return (  
//       <header className="App-Header">
//         <h2>Jeopardy</h2>
//         <p>{this.props.tagline}</p>
//       </header>      
//     )
//   }
// })

// const Board = React.createClass({
//   render() {
//     return (  
//       <div className="Board">
//         <p>This is the gameboard. It contains 6 CATEGORIES</p>
//       </div>
//     )
//   }
// })

// const Score = React.createClass({
//   render() {
//     return (  
//       <div className="Score">
//         <p>Your score is $ {this.props.score} </p>
//       </div>
//     )
//   }
// })




export default App;