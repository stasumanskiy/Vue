new Vue({
	el: '#app',
	data: {
		name: 'Vue!!'
	},
	methods: {
		changeName: function (event) {
			this.name = event.target.value
		}
	}
});

new Vue({
	el: '#app1',
	data: {
		name: 'Vue!!',
		number: 100,
		isOk: false,
		string: 'My name is Stas',
	},
	methods: {
		sayHellow: function (event) {
			return 'I am function'
		}
	}
});

new Vue({
	el: '#app2',
	data: {
		url: 'https://www.google.com',
	}
});

new Vue({
	el: '#app3',
	data: {
		link: '<a href="https://www.google.com">Google</a>',
	}
});

new Vue({
	el: '#app4',
	data: {
		counter: 0,
		counter2: 0,
	},
	methods: {
		riseCounter: function() {
			this.counter ++
		},
		onHover: function(event) {
			event.target.style.color = 'red'
		}
	}
});

new Vue({
	el: '#app5',
	data: {
		counter: 0,
		title: 'Счетчик'
	},
	methods: {
		riseCounter: function(num, str, event) {
			this.counter += num
			this.title = str

			if (num === 5) {
				event.target.style.color = 'blue'
			} else if (num === 10) {
				event.target.style.color = 'red'
			}
		}
	}
});


new Vue({
	el: '#app6',
	data: {
		x: 0,
		y: 0
	},
	methods: {
		handleMouseMove: function(event) {
			this.x = event.clientX
			this.y = event.clientY
		},
		alertValue: function(event) {
			alert(event.target.value)
		}
	}
});


new Vue({
	el: '#app7',
	data: {
		url: 'http://google.com',
		counter: 0
	}
});


new Vue({
	el: '#app8',
	data: {
		inputValue: 'Initial Value'
	}
});


new Vue({
	el: '#app9',
	data: {
		isActive: false,
		color: 'blue'
	},
	computed: {
		getCssClasses: function() {
			return {
				'red': this.isActive,
				'green': !this.isActive
			}
		}
	}
});

new Vue({
	el: '#app10',
	data: {
		color: 'red',
		height: '40'
	},
	computed: {
		circleClasses: function() {
			return {
				'background': this.color,
				'height': this.height + 'px'
			}
		}
	}
});

new Vue ({
	el: '#app11',
	data: {
		isVisible: true
	}
});

new Vue ({
	el: '#app12',
	data: {
		type: 'a'
	}
});

new Vue ({
	el: '#app13',
	data: {
		isVisible: true
	}
});


new Vue({
	el: '#app14',
	data: {
		people: [
			{
				name: 'Vlad',
			 	age: 21
			},
			{
				name: 'Max',
				age: 24
			},
			{
				name: 'Roman',
				age: 27
			}
		],
		person: {
				name: 'Max',
				age: 33,
				job: 'Frontend'
			}
	}
});


new Vue({
	el: '#app15',
	data: {
		counter: 0,
		counter2: 0
	},
	methods: {
		add: function() {
			this.counter++
		},
		sub: function() {
			this.counter--
		},
		result: function() {
			console.log('Result was called')
			return this.counter > 3 ? 'More than 3' : 'Less than 3'
		}
	},
	computed: {
		computedResult: function() {
			console.log('Computed result was called')
			return this.counter > 3 ? 'More than 3' : 'Less than 3'
		}
	},
	watch: {
		counter: function(val) {
			console.log('From watch object', val)
		}
	}
});

var vueComp = new Vue({
	el: '#app16',
	data: {
		title: 'Hellow I am Vue!'
	},
	methods: {
		alertFast: function() {
			alert('Hellow world!')
		}
	}
});

vueComp.updateTitle = 'New title Vue1'

console.log(vueComp)

new Vue({
	el: '#app17',
	data: {
		title: 'Hellow from Vue!'
	},
	methods: {
		updateFirstTitle: function() {
			vueComp.title = 'Updated from second app'
			vueComp.updateTitle = 'Updated from second app11111'
			
			setTimeout(function() {
				vueComp.alertFast()
			},1000)
		}
	}
});

new Vue({
	el: '#app18',
	data: {
		title: 'Hellow from Vue!'
	},
	methods: {
		updateFirstTitle: function() {
			this.title = 'New title'
			console.log(this.$refs.heading)
			console.log(this.$refs.horLine)
		}
	}
});

var vue = new Vue({
	data: {
		title: 'Hellow I am Vue!'
	},
	template: '<div><h2>{{ title }}</h2><p>Hi</p></div>'
});

vue.$mount('#app19');

new Vue({
	el: '#app20',
	data: {
		title: 'World'
	}
});