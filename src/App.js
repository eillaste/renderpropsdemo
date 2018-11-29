import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyComponent msg={'Render Props'}>
					{({ on, msg, onChange }) =>
						on ? (
							<div>
								<h1>{msg}</h1>
								<button onClick={onChange}>close me</button>
							</div>
						) : (
							<button onClick={onChange}>open me</button>
						)}
				</MyComponent>
			</div>
		);
	}
}

export default App;
