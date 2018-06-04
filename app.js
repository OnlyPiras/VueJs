/*
var vueApp = new Vue({
	el:'#vueApp',
	data:{
		dog:"maja to pies",
	}
	})
	
*/
/*
var vueApp = new Vue({
	el:'#vueApp',
	components:{
		'my-header':{
			template: '<h2>Welcome {{userName}}</h2>',
			data: function(){
				return{
					userName: 'Jan'
				}
			}
		}
	}
})
*/

Vue.component('dog', {
  template: '#dog-template',
  props: ['name', 'score'],
  methods: {
    voteDog: function(){
      this.score++;
    }
  }
})
 
var vueApp = new Vue({
  el: '#vueApp',
})


