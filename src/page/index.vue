<template>
	<el-container class="home">
		<el-header>header</el-header>
		<el-container>
			<el-aside>
				<Aside></Aside>
			</el-aside>
			<el-main>
				<Main></Main>
			</el-main>
		
		</el-container>
	</el-container>
</template>

<script>
import Aside from "@/components/Aside/Aside";
import Main from "@/components/Main/Main";
import Footers from "@/components/Footers/Footers";
export default {
	components: {
		Aside,
		Main,
		Footers
	}
};
</script>
