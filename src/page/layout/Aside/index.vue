<template>
    <el-menu
        mode="vertical"
        unique-opened
        :default-active="$route.path"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#409EFF"
    >
        <h5 class="name">标题</h5>
        <Sidebar :routes="routes" />
    </el-menu>
</template>
<script>
import Sidebar from "../Aside/Aside";
export default {
    name: "asideIndex",
    components: {
        Sidebar,
    },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        routes() {
            console.log(global.antRouter,'asideIndex')
            return global.antRouter;
        },
    },
    watch: {},
};
</script>
<style scoped>
.name {
    color: #fff;
    text-align: center;
    line-height: 60px;
}
</style>