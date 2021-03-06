import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _41cd264c = () => import('../src/pages/slotmachine.vue' /* webpackChunkName: "pages/slotmachine" */).then(m => m.default || m)
const _4edb438e = () => import('../src/pages/classticketgame.vue' /* webpackChunkName: "pages/classticketgame" */).then(m => m.default || m)
const _8f6fc8b0 = () => import('../src/pages/classicmine.vue' /* webpackChunkName: "pages/classicmine" */).then(m => m.default || m)
const _0dddf65a = () => import('../src/pages/buycoin.vue' /* webpackChunkName: "pages/buycoin" */).then(m => m.default || m)
const _325978e0 = () => import('../src/pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _6a8abcec = () => import('../src/pages/buildblock.vue' /* webpackChunkName: "pages/buildblock" */).then(m => m.default || m)
const _2b84d5be = () => import('../src/pages/classicdoubtdice.vue' /* webpackChunkName: "pages/classicdoubtdice" */).then(m => m.default || m)
const _1fad9b49 = () => import('../src/pages/classicroulette.vue' /* webpackChunkName: "pages/classicroulette" */).then(m => m.default || m)
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
			path: "/slotmachine",
			component: _41cd264c,
			name: "slotmachine"
		},
		{
			path: "/classticketgame",
			component: _4edb438e,
			name: "classticketgame"
		},
		{
			path: "/classicmine",
			component: _8f6fc8b0,
			name: "classicmine"
		},
		{
			path: "/buycoin",
			component: _0dddf65a,
			name: "buycoin"
		},
		{
			path: "/about",
			component: _325978e0,
			name: "about"
		},
		{
			path: "/buildblock",
			component: _6a8abcec,
			name: "buildblock"
		},
		{
			path: "/classicdoubtdice",
			component: _2b84d5be,
			name: "classicdoubtdice"
		},
		{
			path: "/classicroulette",
			component: _1fad9b49,
			name: "classicroulette"
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
