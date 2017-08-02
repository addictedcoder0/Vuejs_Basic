new Vue({
    el:'#vue-app',
    data:{
        name:'rudra',
        job : 'CEO of RudriyoCorp',
        age : 26,
        website : 'https://www.google.com',
        htmlTag : '<a href="https://www.godaddy.com">website registering site</a>',
        x:0,
        y:0,
        a:0,
        b:0
    },
    methods :{
        greet : function(timeOfDay){
            /*
            vue js proxy data Object to the main parent object , therefore 
            instead of 'this.data.name' we can use 'this.name' .
            */ 
            return 'hello Good '+ timeOfDay + ' '+this.name ;
        },
        alertAge : function(){
            alert(this.age);
        },
        updatepointer : function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        clickalert : function(event){
            alert('someone clicked me');
        },
        keypressed : function(event){
            console.log('you have entered'+event.text);
        }
        /*addAgeToA : function(){
            console.log('addtoA invoked');
            return this.a+this.age;
        },
        addAgeToB : function(){
            console.log('addtoB invoked');
            return this.b+this.age;
        },*/
    },
    computed :{
        addAgeToA : function(){
            console.log('addtoA invoked');
            return this.a+this.age;
        },
        addAgeToB : function(){
            console.log('addtoB invoked');
            return this.b+this.age;
        }
    }
});