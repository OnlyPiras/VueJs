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

//  Aplikacja licząca punkty

 /*  
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
  data:{
	  imgsrc: "https://www.w3schools.com/w3css/img_lights.jpg"
  }
})
 */

Vue.component('testcomponent',{
   template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>My namy is <span id = "name">{{name}}</span></h1></div>',
   data: function() {
      return {
         name : "SlimShady"
      }
   },
   methods:{
      changename : function() {
         this.name = "Eminem";
      },
      originalname: function() {
         this.name = "SlimShady";
      }
   }
});
var vm = new Vue({
   el: '#component_test'
});
var vm1 = new Vue({
   el: '#component_test1'
});

