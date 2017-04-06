import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Msite from '@/pages/Msite';
import Shop from '@/pages/Shop';
import Position from '@/pages/Position';
import City from '@/pages/City';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Position',
      component: Position
    },
    {
      path: '/City/:CityId',
      name: 'City',
      component: City,
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/Msite/:latitude/:longitude/:geohash',
      name: 'Msite',
      component: Msite,
    },

  ]
})
