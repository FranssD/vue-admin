<template>
    <el-table :data="userList" border style="width: 100%" v-if="userList">
        <el-table-column prop="grade" label="权限" width="180"></el-table-column>
        <el-table-column prop="nickname" label="姓名" width="180"></el-table-column>
        <el-table-column prop="id" label="id"></el-table-column>
		<el-table-column  label="操作">
			<template slot-scope="scope">
				<el-button @click="btnEdit(scope.row)" type="primary" size="small">编辑权限</el-button>
				<el-button @click="btnDelete(scope.row)" type="danger" size="small">删除</el-button>
			</template>
		</el-table-column>
    </el-table>
</template>


<script>
export default {
    data() {
        return {
			userList:'',
        };
	},
	mounted(){
		const that=this
		this.$api.user.getList().then((res) => {
			console.log(res);
			if(res.data.code){
				const content=res.data.data
				content.forEach(element => {
					console.log(element.grade=='1')
					element.grade=='1'?element.grade='visitor':element.grade='admin'
				});
				that.userList=content
			}
        });	
	},
	methods:{
		btnEdit(e){
			console.log(e)
		},
		btnDelete(e){
			console.log(e)
		}
	}
};
</script>

<style>
</style>