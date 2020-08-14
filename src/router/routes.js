import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHide: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHide: true
    }
  },
  {
    path: '/search:keyword?', //加个问好，代表parms参数可接可不接收
    component: Search,
    name: 'search'
  },
  {
    path: '/',
    redirect: '/home'
  }
]