<template>
	<!-- prevent를 사용함으로써 제출후 새로고침을 막을 수 있다. -->
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<!-- button 클릭시 이벤트 버블링으로 form 태그에 올라간다. -->
		<button type="submit">회원가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log('response :', data.username);
			this.logMessage = `${data.username}님이 가입되었습니다`;
			this.initForm();
		},
		initForm() {
			this.userName = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
