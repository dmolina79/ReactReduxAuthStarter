import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function (dispatch) {
		//submit email/password to server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				//if request is good
				// -update state if user authenticated
				// -save JWT token
				// -redirect to the route '/feature'
				browserHistory.push('/feature');	
			})
			.catch(() => {

			});
		//if request is bad
		// -show error to the user
	}
}
