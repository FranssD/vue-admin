<template>
	<section class="main">
		<router-view></router-view>
	</section>
</template>

<script>
export default {
	name:'Main',
	mounted(){
		console.log(window.sessionStorage.getItem('token'),'token')
		console.log(this.$store.state.userInfo,'$store')
		console.log(JSON.parse(sessionStorage.getItem('userInfo')))
		
	}
};
</script>

<style>
</style>