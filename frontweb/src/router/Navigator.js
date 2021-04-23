import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Productos from '../screens/Productos';
import Navbar from '../Components/Navbar';
function Navigator() {
	return (
		<Router>
			<>
				<Navbar />
				<Switch>
					<Route path={'/Productos'} component={Productos}></Route>
				</Switch>
			</>
		</Router>
	);
}

export default Navigator;
