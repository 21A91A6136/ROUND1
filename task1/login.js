class User{
    constructor(name, password) {
       this.name = name;
       this.password = password;
     }
   
     validate(name,password) {
    
   if (name==this.name && password==this.password){  
     alert("Login successfull");    
   }else {  
     alert("Unathorized access..! ");  
     }  
   }
   }  
function action(){  
var name=document.getElementById('uname').value;  
var password=document.getElementById('pass').value;  

    user = new User("abc",'123');
    user.validate(name, password);
}