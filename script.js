//your JS code here. If required.
const formbtn = document.getElementById("btn");
const nam = document.getElementById("name");
const mail = document.getElementById("email");
const ph = document.getElementById("phone");


 window.onload = ()=>{
	let data = localStorage.getItem("forms");
	 if(data){
		 const info = JSON.parse(data);
		 nam.value = info.name;
		 mail.value = info.email;
		 ph.value = info.phNo;
	 }
	 	
}   
  
  
const formHandler = (e)=>{
	e.preventDefault()
	console.log("yes")
	const data = {
		name: nam.value,
		email: mail.value,
		phNo: ph.value
	}
	localStorage.setItem("forms",JSON.stringify(data));
}

formbtn.addEventListener("click",formHandler);         
       