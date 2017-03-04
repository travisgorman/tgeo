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
      correct: false,
      clue: {},
    }
  },
  
  setClue(newClue) {
    this.state.correct = false;
    this.state.clue = newClue;
    this.state.showMod = true;
    this.setState({clue: this.state.clue})
    this.setState({showMod: this.state.showMod})
    this.setState({correct: this.state.correct})
  },

  setScore(value) {
    let newScore = this.state.score + value;
    this.setState({score: newScore});
    this.closeModal();
  },

  closeModal() {
    this.state.showMod = false;
    this.setState({showMod: this.state.showMod})
  },

  checkGuess(guess, earnings) {
    if (guess === this.state.clue.answer) {
      this.state.correct = true;
      this.setState({correct: this.state.correct})
      this.setScore(earnings)
      // this.closeModal() 
    } else {
      this.state.correct = false;
      this.setState({correct: this.state.correct})
      this.closeModal()   
    }

  },
  componentDidUpdate(){
    console.log('this.state:', this.state )

    // if (this.state.correct) addM

  },
  render(){
    if (this.state.showMod) {
      return (  
        <div className="App">
          <Modal
            // correct={this.state.correct}
            // score={this.state.score}
            checkGuess={this.checkGuess}
            closeModal={this.closeModal}
            setScore={this.setScore}

            value={this.state.clue.value}
            question={this.state.clue.question}
            answer={this.state.clue.answer}/>
          <Header
            tagline={this.state.clue.question}/>
          <Board
            categories={this.state.categories} 
            setScore={this.setScore}
            setClue={this.setClue}/>
          <Score 
            score={this.state.score} />
        </div>
      )
    }
    return (  
      <div className="App">
        <Header 
          tagline={this.state.correct}/>
        <Board 
          categories={this.state.categories} 
          setScore={this.setScore}
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
      .map((category, i) =>{
        let title = category.title
        let clues = category.clues
        return (  
          <Category 
            key={i} 
            title={title} 
            clues={clues} 
            setScore={this.props.setScore}
            setClue={this.props.setClue}/>
        )
      })
    return <div className="Board">{board}</div>
  }
});

const Category = React.createClass({
  render() {
    let clues = this.props
      .clues.map((clue, i) => {
        return (
          <Clue
            key={i} 
            value={clue.value}
            question={clue.question}
            answer={clue.answer}
            setClue={this.props.setClue}/>
        )
      });
    return (
      <div className="Category">
        <section className="category-title">
          {this.props.title}
        </section>
        {clues}
      </div>
    )
  }
});

const Clue = React.createClass({
  clickHandler() {
    this.props.setClue(this.props)
    let style = {background: '#34BD87'}
  },
  render() {
    let style = {background:'#FFC600'}
    return (
      <article onClick={this.clickHandler}>
        <h1 className="value">{this.props.value}</h1>
      </article>
    )
  }
});

const Modal = React.createClass({
  submitHandler(e) {
    e.preventDefault()
    let guess = this.refs.answer.value;
    let earnings = this.props.value;
    this.props.checkGuess(guess, earnings)
  },
  render() {
    return (  
      <div className="Modal">
        <button onClick={this.props.closeModal}>cancel</button>

        <main>
          <form onSubmit={this.submitHandler}>

            <p>{this.props.question}</p>
            <input type="text" ref="answer"/>
            <input type="submit" value="submit"/>
            <p>{this.props.answer}</p>
            <p>{this.props.correct}</p>
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