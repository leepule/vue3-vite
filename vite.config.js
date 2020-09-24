import path from 'path'
module.exports = {
  open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src/')
  },
  base: './',
  assetsDir: 'static',
  outDir: 'dist',
  sourcemap: false,
  // 配置Dep优化行为
  optimizeDeps: {
    // exclude: ['ant-design-vue'],
    include: ['@ant-design/colors']
  },
  // 为开发服务器配置自定义代理规则。
  proxy: {
  },
}