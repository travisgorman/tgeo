#React JS Patterns


### What it does

* One stateful component,`<App/>` keeps track of 
	- `categories`: an array of 6 objects, each an individual category from `jservice.io/api/`
	- `clue`: the current clue object being played. Each square on the board represents a clue, When a square is chosen, that particular clue is set to state.
	- `showMod`: a boolean that determines wheter a modal is open.
	- `score` a number to which clue values are added and subtracted based on user input

* `<App/>` has 3 children - `<Header/>`, `<Board/>`, and `<Score/>`

*	`<Header/>` doesn't do much. Basiclly just a logo at the moment
*	`<Score/>` is at the bottom, displaying the `score` held in state
*	`<Board/>` maps over the categories in state, rendering a `<Category/>` component for each
	-	`<Category/>` maps over the `clues` array in each `category` object, rendering a `<Clue/>` for each
		+	`<Clue/>` holds the details about each clue - primarily `value`, `question` and `answer`.
			*	renders the number `value` of each clue
			*	on click, `clue` passes the entire `clue` object to `this.state.clue`

