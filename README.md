#TGeopardy

* It collects 6 categories from the Jeopardy API
* It puts 6 `category` objects into an array (`this.state.categories`)
* `App` renders a `Board` component that renders a `Category` for each
	- `App` is a stateful component, keeping track of
		+ `categories`: an array of the game categories
		+ `clue`: the current clue being played
		+ `showMod`: a boolean determining whether the modal is open or not
		+ `score`: the collection of your earnings from correct answers
	- * `<App/>` has 3 children - `<Header/>`, `<Board/>`, and `<Score/>`

* `App` passes 2 methods to `Board` that allow children to acces `stateChange`
* These 2 methods are passed all the way down to the `Clue` component
  - `Board` passes them to `Category`, and `Category` passes them to `Clue`
* `Category` maps over the `clues` array and renders a `Clue` component for each
* `Clue` is a stateful component, keeping track of which clues have been 
  - clicked
  - answered correctly
  - answered incorrectly
* On click, `Clue`
  - puts its details (`clue.value`, `clue.question`, & `clue.answer`) into `App` state
  - calls `showModal` to toggle the `App` state, making showModal `true`
  - changes `Clue` state to `clicked: true`, marking it as a played tile
  - `App` renders a modal with an input field and the `clue.question`
* On submit, calls `checkGuess`, checking user input against the `clue.answer`
  - if it's a match, you were correct, and `clue.value` is added to your score

## STILL TO DO

* Back end with Firebase. Sync state.
* React Router - browserHistory
* Styling and CSS Transitions (user interface animations)
* Add some functionality to `checkGuess` to make it a little more forgiving. Such as ignoring leading articles (the, an, a), capitalization, etc...
* Make `Modal` a transparent overlay. Look into other modal alternatives (bootstrap modal, react-modal, etc)
