<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<!-- prevent로 form 제출시 새로고침 방지 -->
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p class="validataion-text warning" v-if="!isContentsValid">
						Contents must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	async created() {
		const { data } = await fetchPost(this.$route.params.id);
		this.title = data.title;
		this.contents = data.contents;
	},
	methods: {
		async submitForm() {
			const id = this.$route.params.id;
			try {
				const editData = {
					title: this.title,
					contents: this.contents,
				};
				await editPost(id, editData);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
				this.logMessage = error;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
