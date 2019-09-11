var login = "stdteam";
var password = "stdteam7" ;

function Login(a, b){
	var A = document.getElementById(a).value;
	var B = document.getElementById(b).value;
	 if(A == login && B == password){
		 document.location.href = "http://stdteam.000webhostapp.com/#" ;
	 }
	 else{
	 	alert("Wrong login or password ");
	 }
};
