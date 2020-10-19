import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'playlist',
      component: () => import('../views/Playlist/Playlist.vue'),
    },
    {
      path: '/album',
      name: 'album',
      component: () => import(/* webpackChunkName: "about" */ '../views/Musicalbum/Musicalbum.vue'),
    },
    {
      path: '/album/:id',
      name: 'albumiid',
      component: () => import(/* webpackChunkName: "about" */ '../views/Album/Album.vue')
    },
    {
      path: '/genres',
      name: 'genres',
      component: () => import(/* webpackChunkName: "about" */ '../views/Genre/Genres.vue')
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import(/* webpackChunkName: "about" */ '../views/Artist/Artists.vue')
    }
  ]
})
