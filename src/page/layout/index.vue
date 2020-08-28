<template>
	<el-container class="home">
		<el-aside class="_vh100 aside">
			<AsideIndex></AsideIndex>
		</el-aside>
		<el-container>
			<el-header class="header">
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
.header{box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);height:auto!important;}
.aside{width: 210px!important;}
</style>