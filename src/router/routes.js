import Home from '../pages/Home/Home'
import Class from '../pages/Class/Class'
import Search from '../pages/Search/Search'
import Discern from '../pages/Discern/Discern'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Personal from '../pages/Personal/Personal'
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      footer: true
    }
  },
  {
    path: '/class',
    component: Class,
    meta: {
      footer: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/discern',
    component: Discern,
    meta: {
      footer: true
    }
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta: {
      footer: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect : '/home'
  }
]