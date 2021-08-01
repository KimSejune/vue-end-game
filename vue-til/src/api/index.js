import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function createInstance() {
	// vue cli에서 VUE_APP 시작하면 바로 가져올 수 있다.
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});

	return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
async function registerUser(userData) {
	return await instance.post('signup', userData);
}

// 로그인 API
async function loginUser(userData) {
	return await instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
