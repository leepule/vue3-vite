<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="state.collapsed" :trigger="null" collapsible>
      <!-- <div class="logo" /> -->
      <img src="./assets/logo-1.png" class="logo" v-if="!state.collapsed" />
      <span v-if="!state.collapsed" style="color:#fff;font-size:16px;">VUE3-VITE</span>
      <img src="./assets/logo-1.png" class="logo" v-else />
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; position: fixed; z-index: 1;right: 15px;" :style="{ width: !state.collapsed ? 'calc(100% - 215px)' : 'calc(100% - 95px)' }">
        <menu-unfold-outlined
          v-if="state.collapsed"
          class="trigger"
          @click="() => (state.collapsed = !state.collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (state.collapsed = !state.collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '88px 16px 24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: 'auto'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Menu from "./components/Menu.vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { getCurrentInstance, computed, reactive } from "vue";
export default {
  name: "App",
  components: {
    Menu,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  data() {
    return {
      selectedKeys: ["1"]
    };
  },
  setup(props: any, context: any) {
    const { ctx }: any = getCurrentInstance();
    const state = reactive({
      collapsed: false
    })
    return {
      state
    };
  },
  mounted() {
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  vertical-align: middle;
}
#components-layout-demo-custom-trigger span {
  vertical-align: middle;
}
</style>
