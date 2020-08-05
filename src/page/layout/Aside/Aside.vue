<template>
    <div>
		<template v-for="item in routes" >
            <router-link v-if="item.style && item.componentName=='index'" :to="item.path" :key="item.meta.title"> 
                <el-menu-item  :index="item.path">
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </router-link>
			<el-submenu v-else-if="item.style" :index="item.path" :key="item.meta.title">
				<template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item-group >
                    <router-link v-for="child in item.children" :key="child.meta.title" :to="child.path">
                        <el-menu-item :index="child.path">{{child.meta.title}}</el-menu-item>
                     </router-link>
                </el-menu-item-group>
			</el-submenu> 
		</template>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        routes: {
            type: Array
        }
    },
    created() {
        console.log("渲染模板之前");
    },
    mounted() {
        console.log(this.routes, "1");
    },
    methods: {
        // handleOpen(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        // handleClose(key, keyPath) {
        //     console.log(key, keyPath);
        // }
    }
};
</script>

<style scoped>
#Aside {
    background: rgb(68, 209, 190);
}
</style>