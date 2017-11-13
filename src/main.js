import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
import axios from 'axios';
import app from './app.vue';
import routes from './router/routes.config.js';
import store from '../vues/vuestore.js';

let query= {
    install:function (V) {
        V.prototype.$http = axios
    }
}
Vue.use(query)

var router = new VueRouter({
    routes:routes
})

new Vue({
    el:'.container',
    router:router,
    render: h => h(app),
    store:store
})

if(module.hot) {
    module.hot.accept()
}