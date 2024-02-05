//your JS code here. If required.
const formtag = document.getElementById("form1");
const ip = document.getElementById("ip1");
 window.onload = ()=>{
	let mail = localStorage.getItem("email");
	 if(mail){
		 ip.value = JSON.parse(mail)
	 }
	 	
} 

  
const formHandler = (e)=>{
	e.preventDefault() 
	localStorage.setItem("email",JSON.stringify(ip.value));
}

formtag.addEventListener("submit",formHandler);       
       