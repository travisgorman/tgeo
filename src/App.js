import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import categories from './categories.js'

const App = React.createClass({
  getInitialState() {
    return {
      categories,
      score: 0,
      showMod: false,
    }
  },
  showModal() {
    this.setState({showMod: true})
  },
  render(){
    if (this.state.showMod){
      return (  
        // <Modal />
          // value={this.props.value} 
          // question={this.props.question} 
          // answer={this.props.answer} />   

       <div className="App">
         <Header tagline={"This is a modal"}/>
         <Board categories={this.state.categories} showModal={this.showModal} />
         <Score score={this.state.score} />
        </div>
      )
    }
    return (  
      <div className="App">
        <Header tagline={"We give you answers, and you ask us questions"}/>
        <Board categories={this.state.categories} showModal={this.showModal}/>
        <Score score={this.state.score} />
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
        return <Category title={title} clues={clues} key={i} showModal={this.props.showModal}/>
      })
    return (
      <div className="Board">
        {board}
      </div>
    )
  }
})

const Category = React.createClass({
  clickHandler(){

  },
  render() {
    let clues = this.props.clues
      .map((clue, i)=>{
        return (  
          <Clue
            onClick={this.clickHandler}
            value={clue.value} 
            question={clue.question} 
            answer={clue.answer}
            showModal={this.props.showModal}
            key={i} />
        )
      })

    return (
      <div className="Category">
        <section className="category-title">
          {this.props.title}
        </section>
        {clues}
      </div>
    )
  }
})

const Clue = React.createClass({

  render() {
    return (
      <article onClick={this.props.showModal}>
        <h1 className="value">{this.props.value}</h1>
      </article>
    )
  }
})

// const Modal = React.createClass({
//   submitHandler() {
//       console.log( this.refs.answer )
//   },
//   render() {
//     return (  
//       <div className="Modal">
//         <form onSubmit={this.submitHandler}>
//           <p>{this.props.question}</p>
//           <input type="text" ref="answer"/>
//           <input type="submit" value="submit"/>

//         </form>       
//       </div>
//     )
//   }
// })

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