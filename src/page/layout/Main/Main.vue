<template>
	<section class="main">
		<router-view></router-view>
	</section>
</template>

<script>
export default {
	name:'Main',
	mounted(){
		// console.log(sessionStorage.getItem('token'),'token')
		// console.log(this.$store.state.userInfo,'$store')
		// console.log(JSON.parse(window.localStorage.getItem('router')),'global.antRouter')
		// console.log(JSON.parse(sessionStorage.getItem('userInfo')),'userInfo')
		// console.log(JSON.parse(sessionStorage.getItem('routerList')),'routerList')
		
	}
};
</script>

<style>
</style>