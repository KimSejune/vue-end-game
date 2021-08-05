import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

// axios 초기화 함수
function createInstanceWithAuth(url) {
	// vue cli에서 VUE_APP 시작하면 바로 가져올 수 있다.
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});

	return setInterceptors(instance);
}
const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
