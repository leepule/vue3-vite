import {
  createApp,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watch,
  nextTick
} from 'vue'
import {
  useRouter,
  useRoute
} from 'vue-router'
import App from './App.vue'
import { router } from './router/index'
import './index.css'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

const app = createApp(App)
app.use(Antd);
app.use(router);
app.config.globalProperties.$ref = ref;
app.config.globalProperties.$reactive = reactive;
app.config.globalProperties.$onBeforeMount = onBeforeMount;
app.config.globalProperties.$onMounted = onMounted;
app.config.globalProperties.$watch = watch;
app.config.globalProperties.$nextTick = nextTick;

app.config.globalProperties.$useRouter = useRouter;
app.config.globalProperties.$useRoute = useRoute;

app.mount('#app')