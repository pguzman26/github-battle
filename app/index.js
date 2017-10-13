var React = require('react');
var ReactDOM = require('React-dom');
require('./index.css');



class App extends React.Component {
	render() {
		return(
			<div>
				Hello React Training!
			</div>
		)
	}
}



ReactDOM.render(
	<App />,
	document.getElementById("app")
	);