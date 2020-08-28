<template>
    <section class="content">
        <el-breadcrumb separator="/" class="source">
            <el-breadcrumb-item :to="{ path: '/' }" class="isLink">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="noLink">
                {{title}}
            </el-breadcrumb-item>
        </el-breadcrumb>
		<div class="userInof">
			{{userInfo.nickname}}
			<i class="el-icon-caret-bottom"></i>
		</div>
    </section>
</template>

<script>
export default {
	data(){
		return {
			title:'首页',
			userInfo:JSON.parse(sessionStorage.getItem('userInfo'))
		};
	},
	watch: {
		$route(to) {
			console.log(to.meta)
			this.title=to.meta.title
		}
	},
	mounted(){
		let [foo = 1] = [2];
		console.log(foo)
	}
	
};
</script>

<style scoped>
.content{display: flex;justify-content: space-between;padding: 25px 0;}
.content .source{display: flex;align-items: center;}

.content .userInof{cursor: pointer;}
</style>