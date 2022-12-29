<template>
	<div>
		<h1>{{ result }}</h1>
		<form @submit.prevent="onSubmitForm">
			<input ref="answer" minlength="4" maxlength="4" v-model="value" />
			<button type="submit">입력</button>
		</form>
		<div>시도 : {{ tries.length }}</div>
		<ul>
			<li v-for="t in tries">
				<div>{{ t.try }}</div>
				<div>{{ t.result }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
const getNumbers = () => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for (let i = 0; i < 4; i += 1) {
		const chosen = candidates.splice(
			Math.floor(Math.random() * (9 - i)),
			1
		)[0];
		array.push(chosen);
	}
	return array();
};

export default {
	data() {
		return {
			answers: getNumbers(),
			tries: [],
			value: "",
			result: "",
		};
	},
	methods: {
		onSubmitForm(e) {
			if (this.value == this.answer.join("")) {
				// 정답 맞추면?
				this.tries.push({
					try: this.value,
					result: "홈런",
				});
				this.result = "홈런";
				this.tries = [];
			} else {
			}

			this.value = "";
			this.$refs.answer.focus();
		},
	},
};
</script>

<style></style>
