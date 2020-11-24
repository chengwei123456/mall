module.exports = {
  configurewebpack :{
    resolve: {
      //配置文件别名
      alias: {
        '@': 'src',
        'assets':'@/src',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}