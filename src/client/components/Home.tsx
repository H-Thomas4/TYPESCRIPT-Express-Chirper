import * as React from 'react';
import { chirp } from "../types";
import { Link} from "react-router-dom";

const Home: React.FC<IHomeProps> = () => {
	const [chirps, setChirps] = React.useState<chirp[]>([])

	React.useEffect(() => {
		fetchChirps();
	}, []);

	const fetchChirps = async () => {
		try {
			let res = await fetch("/api/chirps/")
			let chirps = await res.json();
			setChirps(chirps);
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="container">
			{chirps.map((chirp: chirp) => (
				<div key={chirp.id} className="card">
					<div className="card-body">
						<h5 className="card-title">@{chirp.username}</h5>
						<p className="card-text">{chirp.message}</p>
						<Link to={`/chirp/${chirp.id}/admin`}>
						<button className="btn btn-info float-right">Admin Options</button>
						</Link>
						
					</div>
				</div>	
			))}
		</div>
	)
}

interface IHomeProps {}

export default Home



/*class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state ={
			chirps: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/chirps');
			let name = await r.json();
			console.log(chirps)
			this.setState({ chirps });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return this.state.chirps.map((chirp: chirp) => (
			<h1>{chirp.username}</h1>
		))
			
	}
}

export interface IAppProps { }

export interface IAppState {
	chirps: chirp[];
}

export default App; */

