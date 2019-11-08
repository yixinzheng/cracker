// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import '@/assets/css/style.css'

Vue.directive('drag', {
  inserted: function (el, binding) {
    el.onmousedown = function (e) {
      e.stopPropagation()
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        e.preventDefault()
        el.style.left = e.pageX - disx + 'px'
        el.style.top = e.pageY - disy + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
        el.style.left = el.offsetLeft + 'px'
        el.style.top = el.offsetLeft + 'px'
        // binding 传参，可忽略
        if (binding && binding.value) {
          binding.value.clientX = parseInt(el.style.left)
          binding.value.clientY = parseInt(el.style.top)
        }
      }
    }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
