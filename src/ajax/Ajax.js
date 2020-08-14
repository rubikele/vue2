import axios from 'axios';

{/* <script src='nprogress.js'></script>
<link rel='stylesheet' href='nprogress.css'/> */}
//以下两段引入相当于引入的是以上的两句
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 创建一个新的axios实例
const instance = axios.create({
  baseURL: '/api', //配置请求的基础路径   抽取公共api路径，写路径就能省略
  timeout: 20000, //配置请求超时时间
});



//请求和响应拦截器，
//在客户端流出去之前，拦截在其中间去修改你要修改的
//config 代表的是请求的报文
instance.interceptors.request.use(
  config => {
    NProgress.start();
    return config;  //返回这个config  请求继续发送  发送的报文信息就是新的config对象
  }
)

//在流进客户端之前，响应拦截，中间去修改你要修改的
instance.interceptors.response.use(
  response => {
    NProgress.done();
    //现在我们是在返回响应之前把响应直接改成了数据，以后我们拿数据不需要再去.data了
    return response.data
  },
  error => {
    NProgress.done();
    //当错误的时候，直接显示错误信息
    alert('发送请求失败' + errpr.message || '未知错误')
    //如果你不再处理这个错误，你就可以返回一个peding状态的promise ，来终止promise链
    return new Promise(() => { })
  }
)

export default instance;