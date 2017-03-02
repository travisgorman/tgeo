import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import categories from './categories.js'

const App = React.createClass({
  getInitialState() {
    return {
      categories,
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
        <Board categories={this.state.categories} />
        <Score 
          score={this.state.score} />
      </div>
    )
  }
})

const Header = React.createClass({
  render() {
    return (  
      <header className="App-Header">
        <h2>Jeopardy</h2>
        <p>{this.props.tagline}</p>
      </header>      
    )
  }
})

const Board = React.createClass({
  render() {
    let categories = this.props.categories;
  
    let board = categories
      .map((category, i)=>{
        let title = category.title
        let clues = category.clues
        return <Category title={title} clues={clues} key={i}/>
      })

    return (
      <div className="Board">
        {board}
      </div>
    )
  }
})

const Category = React.createClass({

  render() {
    // let values = this.props.clues
    //   .map((clue, i)=> {
    //     return (  
    //       <div className="value">
    //         <h4>{clue.value}</h4>
    //       </div>
    //     )
    //   })

// renders this.props.title and maps this.props.clues, rendering a Clue for each item in the array
// passes attributes value, question, & answer
  let clues = this.props.clues
    .map((clue, i)=>{
      return <Clue value={clue.value} question={clue.question} answer={clue.answer} key={i} />
    })
  
    return (  
      <div className="Category">
        <p>{this.props.title}</p>
        {clues}
      </div>
    )
  }
})

const Clue = React.createClass({
  render() {
    return (  
      <div className="Clue">
        <h2>{this.props.value}</h2>
      </div>
    )
  }
})


const Score = React.createClass({
  render() {
    return (  
      <div className="Score">
        <p>Your score is $ {this.props.score} </p>
      </div>
    )
  }
})

export default App;