import { instance } from './index';

// 회원가입 API
async function registerUser(userData) {
	return await instance.post('signup', userData);
}

// 로그인 API
async function loginUser(userData) {
	return await instance.post('login', userData);
}

export { registerUser, loginUser };
