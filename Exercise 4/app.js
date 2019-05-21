new Vue({
	el: '#exercise',
	data: {
		className: '',
		cls: 'example',
		bool: false,
		color: 'black',
		fontSize: 20,
		width: 0
	},
	methods: {
		startEffect() {
			this.className = this.className === 'highlight' ? 'shrink' : 'highlight';
		},
		startProgress() {
			setInterval(() => {
				console.log(this.width);
				this.width++;
			}, 1000);
		}
	}
});
