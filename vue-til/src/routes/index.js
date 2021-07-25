import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter); // plugin 실행을 위한 초기 코드

export default new VueRouter({
	// page의 정보를 담는다.
	mode: 'history', //url #이 제거된다.
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'), // 코드 스플릿팅
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'), // 코드 스플릿팅
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '*', // 위를 제외한 모든 url 반응
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
}); // main.js에서 호출시 vue-router instance가 호출된다.
