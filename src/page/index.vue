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
import Header from "./Header/Header";
import AsideIndex from "./Aside/index";
import Main from "./Main/Main";
import Footers from "./Footers/Footers";
export default {
	components: {
		Header,
		AsideIndex,
		Main,
		Footers,
	},
};
</script>
