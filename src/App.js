import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyComponent
					msg={'Render Props'}
					render={({ on, msg, onChange }) => (
						<div>
							{on ? (
								<div>
									<h1>{msg}</h1>
								</div>
							) : (
								<div>0</div>
							)}

							<button onClick={onChange} />
						</div>
					)}
				/>
			</div>
		);
	}
}
export default App;
