<template>
  <h1>1、初始化项目</h1>
  <pre v-highlight><code class="lang-shell">$ npm init vite-app &lt;project-name&gt;<br />$ cd &lt;project-name&gt;<br />$ yarn install<br />$ yarn dev</code></pre>

  <h1>2、配置路由</h1>
  <pre v-highlight><code class="lang-shell">$ yarn add vue-router@next</code></pre>
  <h2>2.1、初始化vue-router</h2>
  <h3>创建 history 对象(新建router目录，创建index.ts文件)</h3>
  <pre v-highlight><code class="lang-javascript">
    import { createRouter, createWebHistory } from 'vue-router'
    export const router = createRouter({
      history: createWebHistory(),
      routes: []
    })
  </code></pre>
  <p>在main.ts文件中引入该文件</p>
  <pre v-highlight><code class="lang-javascript">
    import { router } from './router/index'
    app.use(router);
  </code></pre>

  <h1>3、配置全局变量</h1>
  <p>为了避免每个文件都需要</p>
  <pre v-highlight><code>import {ref,reactive,onBeforeMount,onMountedwatch,nextTick} from 'vue'</code></pre>
  <p>固做了如下处理</p>
  <pre v-highlight><code class="lang-javascript">
    import {
      createApp,
      ref,
      reactive,
      onBeforeMount,
      onMounted,
      watch,
      nextTick
    } from 'vue'
    app.config.globalProperties.$ref = ref;
    app.config.globalProperties.$reactive = reactive;
    app.config.globalProperties.$onBeforeMount = onBeforeMount;
    app.config.globalProperties.$onMounted = onMounted;
    app.config.globalProperties.$watch = watch;
    app.config.globalProperties.$nextTick = nextTick;
  </code></pre>
  然后每个文件可以这样使用
  <pre v-highlight><code class="lang-javascript">
    import { getCurrentInstance } from "vue"; //必须
    export default {
      name: "App",
      setup(props: any, context: any) {
        const { ctx }: any = getCurrentInstance();
        ctx.$onMounted(() => {console.log('onMounted')})
        return {};
      }
    };
  </code></pre>
</template>
<script>

export default {
  data() {
    return {};
  },
  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
  },
};
</script>
