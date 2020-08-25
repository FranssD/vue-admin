<template>
	<el-container class="home">
		<el-aside class="_vh100 aside">
			<AsideIndex></AsideIndex>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-main>
				<Main></Main>
			</el-main>
			<!-- <el-footer>
				<Footers></Footers>
			</el-footer> -->
		</el-container>
	</el-container>
</template>

<script>
import Header from "./Header/Header";
import AsideIndex from "./Aside/index";
import Footers from "./Footers/Footers";
import Main from "./Main/Main";
export default {
	name: 'layout',
	components: {
		Header,
		AsideIndex,
		Main,
		Footers
	},
};
</script>
<style scoped>
.aside{width: 210px!important;}
</style>