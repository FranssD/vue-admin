<template>
	<section>
		<template v-for="item in routes">
			<router-link
				v-if="item.length===1 && !item.children && !item.alwaysShow"
				:to="item.path+'/'+item.path"
				:key="item.name"
			>
				<el-menu-item
					:index="item.path+'/'+item.path"
					:class="{'submenu-title-noDropdown':!isNest}"
				>
					<span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
				</el-menu-item>
			</router-link>

			<el-submenu v-else :index="item.name||item.path" :key="item.name">
				<template slot="title">
					<span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
				</template>

				<template v-for="child in item.children" v-if="!child.hidden">
					<sidebar-item
						:is-nest="true"
						class="nest-menu"
						v-if="child.children&&child.children.length>0"
						:routes="[child]"
						:key="child.path"
					></sidebar-item>

					<router-link v-else :to="item.path+'/'+child.path" :key="child.name">
						<el-menu-item :index="item.path+'/'+child.path">
							<span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
						</el-menu-item>
					</router-link>
				</template>
			</el-submenu>
		</template>
	</section>
</template>

<script>
export default {
	data() {
		return {
			// routes:[
			// 	{
			// 		a:'1'
			// 	},
			// 	{
			// 		a:'2'
			// 	}
			// ]
		};
	},
	props: ["routes"],
	created() {
		console.log("渲染模板之前");
	},
	mounted() {
		console.log(this.routes, "1");
	},
	methods: {
		clickroute() {},
	},
};
</script>

<style scoped>
#Aside {
	background: rgb(68, 209, 190);
}
</style>