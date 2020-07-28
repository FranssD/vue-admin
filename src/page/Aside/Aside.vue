<template>
    <section>
        <!-- <template v-for="item in routes">
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
        </template>-->
        <el-row class="tac">
            <el-col :span="24">
                <h5>自定义颜色</h5>
                <el-menu
                    default-active="1-1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#304156"
                    text-color="#fff"
                    active-text-color="#ffd04b"
					unique-opened
      				router
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-menu-item index="1-4">选项4</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航二</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-menu-item index="2-4">选项4</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </section>
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
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
#Aside {
    background: rgb(68, 209, 190);
}
</style>