var Cucumbers = () => (
	<li>cucumbers</li>
);

var Kale = () => (
	<li>kale</li>
);

var App = () => (
  <div id="app">
    <GroceryList />
  </div>
);

var GroceryList = () => (
	<ul id="GroceryList">
	<li>GT Synergy Gingerberry</li>
	<li>Kale Chips</li>
	<Cucumbers />
  <Kale />
	</ul> 
);

// var TodoList = () => (
// 	<Cucumbers />
// 	<Kale />
// );

ReactDOM.render(<App />, document.getElementById("app"));