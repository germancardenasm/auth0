import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={Navbar} />
			<Route path='/' exact component={Home} />
			<Route path='/profile' exact component={Profile} />
		</div>
	);
}

export default App;
