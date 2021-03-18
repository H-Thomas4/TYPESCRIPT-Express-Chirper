import * as React from 'react';
import { chirp } from "../types";
import { Link, RouteComponentProps} from "react-router-dom";

const SingleChirp: React.FC<IHomeProps> = (props: ISingleChirpProps) => {
	const [chirp, setChirp] = React.useState<chirp>({
        id: "",
        username: "",
        message: ""
    });


	React.useEffect(() => {
		(async () => {
            try {
			let res = await fetch(`/api/chirps/${props.match.params.id}`)
			let chirp = await res.json();
			setChirp(chirp);
		} catch (err) {
			console.log(err)
		}

        
	}, {});

    const deleteChirp = async (id: string) => {
        await fetch(`/api/chirps/${id}`, {
            method: "DELETE"
        });

        props.history.push("/");
    };

	const editChirp = async (id: string) => {
		const newChirp = {
			username: newChirp.username
			message: 
		}
		
		await fetch(`/api/chirps/${id}`, {
            method: "PUT"
			headers: {
				"Content-Type": "application/json"
			}
			body.json.stringify()
        });
	}
	return (
		<div className="container">
				<div className="card">
					<div className="card-body">
                        <div className="row">
                            <h5 className="card-title">@{chirp.username}</h5>
                        </div>
						<div className="row">
                            <textarea className="card-text"> defaultvalue={chirp.message}</textarea>
                        </div>
						<button className="btn btn-info float-right">Edit</button>
						<button className="btn btn-danger float-right" onClick={() => deleteChirp(chirp.id)}>Delete</button>
					</div>
				</div>	
		    </div>
	    </div>
    ))}
}

interface ISingleChirpProps extends RouteComponentProps<{id: string}> { }

export default SingleChirp