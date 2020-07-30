<template>
	<el-container class="home">
		<el-aside class="_vh100">
			<AsideIndex></AsideIndex>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-main>
				<Main></Main>
			</el-main>
			<el-footer>
				<Footers></Footers>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script>
import Header from "./layout/Header/Header";
import AsideIndex from "./layout/Aside/index";
import Footers from "./layout/Footers/Footers";
import Main from "./Main/Main";
export default {
	components: {
		Header,
		AsideIndex,
		Main,
		Footers,
	},
};
</script>
