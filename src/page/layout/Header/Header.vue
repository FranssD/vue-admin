<template>
    <section class="content">
        <el-breadcrumb separator="/" class="source">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
                {{title}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </section>
</template>

<script>
export default {
	data(){
		return {
			title:'首页'
		};
	},
	watch: {
		$route(to) {
			console.log(to.meta)
			this.title=to.meta.title
		}
	},
	mounted(){
		
	}
	
};
</script>

<style scoped>
.content .source{padding: 25px;}
</style>