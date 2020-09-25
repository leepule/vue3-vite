# vue3-vite

# 1、初始化项目
```
  $ npm init vite-app &lt;project-name&gt;
  $ cd &lt;project-name&gt;
  $ yarn install
  $ yarn dev
```
# 2、配置路由
```
  $ yarn add vue-router@next
```
## 2.1、初始化vue-router
### 创建 history 对象(新建router目录，创建index.ts文件)
```
  import { createRouter, createWebHistory } from 'vue-router'
  export const router = createRouter({
    history: createWebHistory(),
    routes: []
  })
```
在main.ts文件中引入该文件
```
  import { router } from './router/index'
  app.use(router);
```
# 3、配置全局变量
为了避免每个文件都需要
```
  import {ref,reactive,onBeforeMount,onMountedwatch,nextTick} from 'vue'
```
固做了如下处理
```
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
```
然后每个文件可以这样使用
```
  import { getCurrentInstance } from "vue"; //必须
  export default {
    name: "App",
    setup(props: any, context: any) {
      const { ctx }: any = getCurrentInstance();
      ctx.$onMounted(() => {console.log('onMounted')})
      return {};
    }
  };
```
