import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import ListGroup from './components/ListGroup.vue';
import Footer from './components/Footer.vue';
import Status from './components/Status.vue';

Vue.component('my-header', Header);
Vue.component('my-list-group', ListGroup);
Vue.component('my-footer', Footer);
Vue.component('my-status', Status);

new Vue({
	el: '#app',
	render: h => h(App)
});
