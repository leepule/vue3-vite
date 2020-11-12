<template>
  <div>
    <h3>watch.vue文件</h3>
    <p>count: {{ count }}</p>
    <!-- <button @click="stopWatch">停止监听</button> -->
  </div>
</template>

<script>
import { watch, ref, reactive } from "vue";
export default {
  setup() {
    // 定义数据源
    const count = ref(10);
    const name = ref("zs");
    // 指定要监视的数据源
    const stop = watch(
      [count, name],
      ([newCount, newName], [oldCount, oldName]) => {
        console.log(newCount, oldCount);
        console.log(newName, oldName);
      },
      { lazy: true }
    );
    // setInterval(() => {
    //   count.value += 2;
    //   name.value = "houyue";
    // }, 2000);
    // 停止监视
    // const stopWatch = () => {
    //   console.log("停止监视，但是数据还在变化");
    //   stop();
    // };
    console.log(count.value);
    return {
      stop,
      count,
      // stopWatch,
    };
  },
};
</script>
