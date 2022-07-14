<template>
  <div class="home">
    <el-container>
      <el-aside class="aside" style="width:200px;">

        <el-row class="tac">
          <el-col>
            <!-- 
            default-active="2" 当前激活菜单的索引
            open close 展开或收起触发的事件
            background-color="rgb(48,65,86)"
          -->
            <el-menu :collapse="isCollapse" default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
              @close="handleClose" background-color="#545c64" text-color="#fff"
              active-text-color="#409EFF" :router="true">
              <el-menu-item index="/home/index">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="/home/document">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>
              <el-menu-item index="/home/lead">
                <i class="el-icon-menu"></i>
                <span slot="title">引导页</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限测试页</span>
                </template>
                <el-menu-item index="4-1">页面权限</el-menu-item>
                <el-menu-item index="4-2">指令权限</el-menu-item>
                <el-menu-item index="4-3">角色权限</el-menu-item>
              </el-submenu>
              <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">图标</span>
              </el-menu-item>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>组件</span>
                </template>
                <el-menu-item index="6-1">页面权限</el-menu-item>
                <el-menu-item index="6-2">指令权限</el-menu-item>
                <el-menu-item index="6-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>图表</span>
                </template>
                <el-menu-item index="7-1">页面权限</el-menu-item>
                <el-menu-item index="7-2">指令权限</el-menu-item>
                <el-menu-item index="7-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>路由嵌套</span>
                </template>
                <el-menu-item index="8-1">页面权限</el-menu-item>
                <el-menu-item index="8-2">指令权限</el-menu-item>
                <el-menu-item index="8-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Table</span>
                </template>
                <el-menu-item index="9-1">页面权限</el-menu-item>
                <el-menu-item index="9-2">指令权限</el-menu-item>
                <el-menu-item index="9-3">角色权限</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>综合实例</span>
                </template>
                <el-menu-item index="10-1">页面权限</el-menu-item>
                <el-menu-item index="10-2">指令权限</el-menu-item>
                <el-menu-item index="10-3">角色权限</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <!-- 路由 -->

      <el-container>
        <router-view>
          <!-- <el-header>Header</el-header>
          <el-main>Main</el-main> -->
        </router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import instance from '@/api/api'
export default {
  name: 'HomeView',
  data() {
    return {
      isCollapse: false, // aside 是否折叠
    }
  },
  created() {
    // /api/aa
    // instance.get('/aa').then(res => {
    //   console.log('homeview--get', res);
    // })

    // instance.post('/ab', { name: 'zz' }).then(res => {
    //   console.log('homeview--post', res);
    // })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  .aside {
    margin: 0;
    padding: 0;
    
    .el-menu-vertical-demo {
      height: 100vh;

      // .el-submenu__title:hover,.el-menu-item:focus,.el-menu-item:hover {
      //  background-color: #303133 !important;
      // }
    }
  }
}
</style>