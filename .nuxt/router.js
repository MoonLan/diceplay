import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _65ee6e16 = () => import('../src/pages/raffle.vue' /* webpackChunkName: "pages/raffle" */).then(m => m.default || m)
const _c8322518 = () => import('../src/pages/dice.vue' /* webpackChunkName: "pages/dice" */).then(m => m.default || m)
const _325978e0 = () => import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _0dddf65a = () => import('../src/pages/buycoin.vue' /* webpackChunkName: "pages/buycoin" */).then(m => m.default || m)
const _068b1e55 = () => import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/raffle",
			component: _65ee6e16,
			name: "raffle"
		},
		{
			path: "/dice",
			component: _c8322518,
			name: "dice"
		},
		{
			path: "/about",
			component: _325978e0,
			name: "about"
		},
		{
			path: "/buycoin",
			component: _0dddf65a,
			name: "buycoin"
		},
		{
			path: "/",
			component: _068b1e55,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
