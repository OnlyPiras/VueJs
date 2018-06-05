var app = new Vue({
    el: '#app',
    data: {
       Online: true,
        something:"",
        StyleObj:{
            backgroundColor:'orange'
        }
    },
    methods:{
        TurnOff(){
            this.Online=!this.Online;
        }
    }
})