import Vue from 'vue'
import App from './App.vue'
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('vue-ueditor-wrap', VueUeditorWrap)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
