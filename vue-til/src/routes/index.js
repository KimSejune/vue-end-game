import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter); // plugin 실행을 위한 초기 코드

const router = new VueRouter({
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
			// router의 부가정보 추가.
			meta: { auth: true },
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { auth: true },
		},
		{
			path: '*', // 위를 제외한 모든 url 반응
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
}); // main.js에서 호출시 vue-router instance가 호출된다.

router.beforeEach((to, from, next) => {
	// to 이동하려는 페이지
	// from 현재 페이지
	// next 페이지 이동할 때 호출하는 API
	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}
	// console.log(to);
	// next를 호출해야지만 다음 페이지로 넘어 갈 수 있다.
	next();
});

export default router;
