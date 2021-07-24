<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
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
				<button :disabled="!isFormValid" type="submit">회원가입</button>
			</form>
			<p>{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
		isFormValid() {
			return this.isUsernameValid && this.password;
		},
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
