<template>
    <div class="content">
        <template v-for="item in routes" v-if="!item.hidden && item.children">
            <router-link
                v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow"
                :to="item.path+'/'+item.children[0].path"
                :key="item.children[0].name"
            >
                <el-menu-item
                    :index="item.path+'/'+item.children[0].path"
                    :class="{'submenu-title-noDropdown':!isNest}"
                >
                    <i :class="item.icon"></i>
                    <span
                        v-if="item.children[0].meta&&item.children[0].meta.title"
                    >{{item.children[0].meta.title}}</span>
                </el-menu-item>
            </router-link>
            <el-submenu v-else :index="item.name||item.path" :key="item.name">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
                </template>
                <template v-for="child in item.children" v-if="!child.hidden">
                    <div class="child">
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
                    </div>
                </template>
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
            type: Array,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
    },
    created() {},
    mounted() {
        console.log(this.routes, "Aside");
    },
    methods: {
        // handleOpen(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        // handleClose(key, keyPath) {
        //     console.log(key, keyPath);
        // }
    },
};
</script>

<style scoped>
.child .el-menu-item {
    background-color: #1f2d3d !important;
}
.child:hover .el-menu-item {
    background-color: #001528 !important;
}
</style>