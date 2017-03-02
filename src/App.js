import React from 'react';
// import logo from './logo.svg';
import './App.css';
import categories from './categories.js'

const App = React.createClass({
  getInitialState() {
    return {
      categories,
      score: 0,
      showMod: false,
      clue: {},
    }
  },
  setClue(newClue) {
    this.setState({clue: newClue})
    this.setState({showMod: true})
  },
  closeModal() {
    this.setState({showMod: false})
  },
  componentDidUpdate(){
    console.log('this.state.clue:', this.state.clue )
  },
  render(){
    if (this.state.showMod) {
      return (  
        <div className="App">
          <Modal
            closeMod={this.closeMod}
            value={this.state.clue.value} 
            question={this.state.clue.question} 
            answer={this.state.clue.answer}/>
          <Header 
            tagline={this.state.clue.question}/>
          <Board 
            categories={this.state.categories} 
            setClue={this.setClue}/>
          <Score 
            score={this.state.score} />
        </div>
      )
    }
    return (  
      <div className="App">
        <Header 
          tagline={this.state.clue.question}/>
        <Board 
          categories={this.state.categories} 
          setClue={this.setClue}/>
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
        return (  
                <Category 
                  title={title} 
                  clues={clues} 
                  key={i} 
                  setClue={this.props.setClue}/>
        )
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
    let clues = this.props.clues
      .map((clue, i)=>{
        return (  
                <Clue
                  value={clue.value}
                  question={clue.question}
                  answer={clue.answer}
                  setClue={this.props.setClue}
                  key={i}/>
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
  clickHandler() {
    this.props.setClue(this.props)
  },
  render() {
    return (
      <article onClick={this.clickHandler}>
        <h1 className="value">{this.props.value}</h1>
      </article>
    )
  }
})

const Modal = React.createClass({

  render() {
    return (  
      <div className="Modal">
        <main>
          <form onSubmit={this.submitHandler}>
            <p>{this.props.question}</p>
            <input type="text" ref="answer"/>
            <input type="submit" value="submit"/>
            <button onClick={this.props.closeMod} >cancel</button>
          </form>       
        </main> 
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