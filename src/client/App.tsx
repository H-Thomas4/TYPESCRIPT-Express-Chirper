import * as React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import SingleChirp from "./components/SingleChirp";


const App:  React.FC<IAppProps> = () => {
	return (
		<Router>
			<Navbar />
				<Switch>
					<Route exact path="/chirp/:id/admin" component={SingleChirp} />
					<Route exact path="/chirp/add" component={AddChirp} />
					<Route exact path="/" component={Home} />
				</Switch>
		</Router>

	)
}	
	

interface IAppProps { }

export default App

