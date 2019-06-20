import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Favourites from '@/views/favouriteBeers';


Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '',         // empty as it is homepage
      name: 'home',     // home used to ....
      component: Home   // vue component
    },

    {
      path: '/favouriteBeers',
      name: 'favouriteBeers',
      component: Favourites
    }
  ]
})


export default router;
