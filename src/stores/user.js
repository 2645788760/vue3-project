import  { defineStore}  from   'pinia';

export const  useUser=defineStore('user',{
    state(){
        return{
            name:"uu",
            age:17            
        }

    },
    actions:{
        setUserName(name){
            this.name=name;


        }

    }

})