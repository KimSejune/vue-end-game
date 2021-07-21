import axios from 'axios';

// vue cli에서 VUE_APP 시작하면 바로 가져올 수 있다.
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

async function registerUser(userData) {
	return await instance.post('signup', userData);
}

export { registerUser };
