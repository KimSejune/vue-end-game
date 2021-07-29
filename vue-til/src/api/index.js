import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	// vue cli에서 VUE_APP 시작하면 바로 가져올 수 있다.
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});

	return setInterceptors(instance);
}

const instance = createInstance();

async function registerUser(userData) {
	return await instance.post('signup', userData);
}

async function loginUser(userData) {
	return await instance.post('login', userData);
}

export { registerUser, loginUser };
