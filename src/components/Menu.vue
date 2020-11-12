<template>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="jump"
    >
      <a-menu-item key="/home">
        <PieChartOutlined />
        <span>home</span>
      </a-menu-item>
      <a-menu-item key="/about">
        <DesktopOutlined />
        <span>about</span>
      </a-menu-item>
      <a-menu-item key="/table">
        <InboxOutlined />
        <span>table</span>
      </a-menu-item>
      <a-menu-item key="/watch">
        <InboxOutlined />
        <span>watch</span>
      </a-menu-item>
      <a-sub-menu key="/sub1">
        <template v-slot:title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item key="/5">Option 5</a-menu-item>
        <a-menu-item key="/6">Option 6</a-menu-item>
        <a-menu-item key="/7">Option 7</a-menu-item>
        <a-menu-item key="/8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="/sub2">
        <template v-slot:title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="/9">Option 9</a-menu-item>
        <a-menu-item key="/10">Option 10</a-menu-item>
        <a-sub-menu key="/sub3" title="Submenu">
          <a-menu-item key="/11"> Option 11 </a-menu-item>
          <a-menu-item key="/12"> Option 12 </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
</template>

<script lang="ts">
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { getCurrentInstance } from "vue";
export default {
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["/home"]
    };
  },
  setup() {
    const { ctx }: any = getCurrentInstance();
    const jump = ({ item, key, keyPath }: any) => {
      ctx.$router.push({
        path: key
      })
    }
    return {
      jump
    }
  },
  watch:{
    $route(to: any){
      this.selectedKeys = [to.fullPath]
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    // jump({ item, key, keyPath }) {
    //   this.$router.push(key)
    // }
  },
};
</script>
