Vue.component('hello', {});

const vm1 = new Vue({
	el: '#app1',
	data: {
		title: 'The VueJS Instance',
		showParagraph: false
	},
	methods: {
		show() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)');
			this.$refs.myButton.innerText = 'Test';
		},
		updateTitle(title) {
			this.title = title;
		}
	},
	computed: {
		lowercaseTitle() {
			return this.title.toLowerCase();
		}
	},
	watch: {
		title(value) {
			alert('Title changed, new value: ' + value);
		}
	}
});

setTimeout(() => {
	vm1.title = 'Changed by timer';
	vm1.show();
}, 3000);

vm1.$mount('#app1');

vm1.$refs.heading.innerText = 'Something else';

const vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second instance'
	},
	methods: {
		onChange() {
			vm1.title = 'Changed';
		}
	},
	computed: {},
	watch: {}
});

const vm3 = new Vue({
	el: 'hello',
	template: '<h1>Hello!</h1>'
});

vm3.$mount('#app3');
document.getElementById('app3').appendChild(vm3.$el);
