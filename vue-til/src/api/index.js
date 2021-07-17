import axios from 'axios';

async function registerUser(userData) {
	const url = 'http://localhost:3000/signup';
	return await axios.post(url, userData);
}

export { registerUser };
