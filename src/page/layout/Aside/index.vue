<template>
    <el-menu
        mode="vertical"
        unique-opened
        :default-active="$route.path"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#409EFF"
    >
        <h5>自定义颜色</h5>
        <Sidebar :routes="routes" />
    </el-menu>
</template>
<script>
import Sidebar from "../Aside/Aside";
export default {
    name: "asideIndex",
    components: {
        Sidebar
    },
    data() {
        return {};
    },
    computed: {
        routes() {
            return global.antRouter
        }
    }
};
</script>

<style>
</style>