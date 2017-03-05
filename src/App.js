import React from 'react';
// import logo from './logo.svg';
import './App.css';
import categories from './categories.js'

/* //////// STATEFUL /////////  */
/* //////// APP /////////////// */
/* //////// COMPONENT ///////// */

const Header = React.createClass({
  clickHandler(e) {
    e.preventDefault()
    console.log( e )
    this.props.showModal()
  },
  render() {
    return (  
      <div className="Header" onClick={this.clickHandler}>
        <h2 className="name">TGeopardy</h2>      
      </div>
    )
  }
})

const App = React.createClass({
  showModal() {
    this.setState({ 
      showModal: !this.state.showModal 
    })
  },

  getInitialState() {
    return {
      categories,
      clue: {},
      score: 0,
      showModal: false,     
    }
  },
  componentDidUpdate() {
    console.log('this.state:', this.state )
  },
  render() {
    if (this.state.showModal) { 
      return (  
        <div className="App">
          <Header showModal={this.showModal} style={{ color: 'red' }} />
          <Modal clue={this.state.clue} />
          <Score score={this.state.score} />
        </div>
      )
    }
    return (  
      <div className="App" > 
        <Header showModal={this.showModal} />
        <Board categories={this.state.categories} />
        <Score score={this.state.score} />
      </div>        
    )
  }
})

const Board = React.createClass({
  render() {
    let board = this.props.categories.map((category, i) => {
      return (  
       <Category 
          key={i}
          clue={this.props.clue}
          setClue={this.props.setClue}
          showModal={this.props.showModal}
          title={category.title}
          clues={category.clues} /> 
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
//
  render() {
    let clues = this.props.clues
      .map((clue, i) => {
        <Clue 
          key={i}
          setClue={this.props.setClue}
          showModal={this.props.showModal}
          value={clue.value}
          question={clue.question}
          answer={clue.answer} />
      })
    return (  
      <div className="Category">
        <section className="title">
          {this.props.title}
        </section>
        {clues}
      </div>
    )
  }
})

const Clue = React.createClass({
//
  render() {
    return (  
      <article 
        className="Clue" 
        onClick={this.props.closeModal}>
        <h1 className="value">
          {this.props.value}
        </h1>
      </article>
    )
  }
})

const Modal = React.createClass({
//
  render() {
    return (  
      <div className="Modal">
        MODAL
      </div>
    )
  }
})


const Score = React.createClass({
//
  render() {
    return (  
      <div className="Score">
        <p>Your score is $ {this.props.score}</p>
      </div>
    )
  }
})


export default App;

// const App = React.createClass({
//   getInitialState() {
//     return {
//       categories,
//       tagline: 'Sort Yourself Out!',
//       showModal: false,
//       clue: {},
//       session:{
//         points:0,
//         correct:0,
//         guesses:0,
//       },
//     }
//   },
//   setClue(newClue){
//     this.setState({clue: newClue}) 
//   },
//   showModal(){
//     // this.state.showModal = true;
//     this.setState({showModal: true})
//   },
//   closeModal() {
//     this.setState({ showModal: false })
//   },
//   render(){
//       return (  
//         <div className="App">
//           <Header tagline={this.state.tagline} />
//           <Board
//             clue={this.state.clue}
//             categories={this.state.categories}
//             setClue={this.setClue}
//             showModal={this.showModal} />
//           <Score session={this.state.session} />
//         </div>
//     )
//   }
// })

// const Modal = React.createClass({
//   submitHandler(e) {
//     e.preventDefault()
//     let guess = this.refs.guess.value;
//     let earnings = this.props.value;
//     this.props.checkGuess(guess, earnings)
//   },
//   render() {
//     return (  
//       <div className="Modal" onClick={this.props.closeModal} >
//         <button onClick={this.props.closeModal}>cancel</button>

//         <main>
//           <form onSubmit={this.submitHandler}>

//             <p>{this.props.question}</p>
//             <input type="text" ref="guess"/>
//             <input type="submit" value="submit"/>
//             <p>{this.props.answer}</p>
//             <p>{this.props.correct}</p>
//           </form>       
//         </main> 
//       </div>
//     )
//   }
// })

// const Header = React.createClass({
//   render() {
//     return (  
//       <header className="App-Header">
//         <h2>TGeopardy</h2>
//         <p>{this.props.tagline}</p>
//       </header>      
//     )
//   }
// })
// /* //////// BOARD ///////// */
// /* //////// COMPONENT ///////// */
// const Board = React.createClass({
//   render() {
//     let board = this.props.categories
//       .map((category, i) =>
//           <Category 
//             key={i}
//             clue={this.props.clue}
//             setClue={this.props.setClue}
//             showModal={this.props.showModal}
//             title={category.title} 
//             clues={category.clues} /> );
//     return <div className="Board">{board}</div>
//   }
// });

//  //////// CATEGORY ///////// 
// /* //////// COMPONENT ///////// */
// const Category = React.createClass({
//   render() {
//     let clues = this.props.clues
//       .map((clue, i) => 
//           <Clue
//             key={i}
//             setClue={this.props.setClue}
//             showModal={this.props.showModal}
//             value={clue.value}
//             question={clue.question}
//             answer={clue.answer}/> );
//     return (
//       <div className="Category">
//         <section className="title">
//           {this.props.title}
//         </section>
//         {clues}
//       </div>
//     )
//   }
// });
// /* //////// STATEFUL ///////// */
// /* //////// CLUE ///////// */
// /* //////// COMPONENT ///////// */
// const Clue = React.createClass({
//   getInitialState() {
//    return {
//     clicked: false,
//     answered: false,
//     correct:  false,
//     showModal:false,
//    }
//   },

//   clickHandler(e) {
//     e.preventDefault();
//     this.setState({ clicked: true });
//     let newClue = {
//       value: this.props.value,
//       question: this.props.question,
//       answer: this.props.answer,
//     }
//     this.props.setClue(newClue)
//     this.setState({showModal:true})
//   },

//   render() {
//     /* //////// CLICKED ///////// */
//     if ( this.state.clicked
//       && !this.state.showModal
//       && !this.state.answered 
//       && !this.state.correct ) {
//       return (
//         <article>
//           <h1 className="value">CLICKED</h1>
//         </article>
//       )
//     }
//     if (this.state.showModal) {
//        return (  
//         <div className="Modal">
//           <button onClick={this.props.closeModal}>cancel</button>

//           <main>
//             <form onSubmit={this.submitHandler}>

//               <p>{this.props.question}</p>
//               <input type="text" ref="answer"/>
//               <input type="submit" value="submit"/>
//               <p>{this.props.answer}</p>
//               <p>{this.props.correct}</p>
//             </form>       
//           </main> 
//         </div>
//       )
//     }
//     return (  
//         <article onClick={this.clickHandler}>
//           <h1 className="value">{this.props.value}</h1>
//         </article>
//     )
//   }
// });


// const Score = React.createClass({
//   render() {
//     return (
//       <div className="Score">
//         <p>Your score is $ {this.props.score} </p>
//       </div>
//     )
//   }
// })

// export default App;