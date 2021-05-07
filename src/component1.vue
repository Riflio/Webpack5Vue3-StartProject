<template>
	<div class="component1">{{ greeting }}</div>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Hi from component 1!'
		}
	}
}
</script>

<style scoped>
.component1 {
  color: red;
}
</style>