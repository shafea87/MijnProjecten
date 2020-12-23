let cadFId = document.getElementById("cadFId").value = 0;
let inrFId = document.getElementById("inrFId").value = 0;
let gbpFId = document.getElementById("gbpFId").value = 0;
let usdFId = document.getElementById("usdFId").value = 0;
let eurFId = document.getElementById("eurFId").value = 0;
let audFId = document.getElementById("audFId").value = 0;
let sgdFId = document.getElementById("sgdFId").value = 0;

let eurTo = document.getElementById("eurTo").value = 0;
let audTo = document.getElementById("audTo").value = 0;
let cadTo = document.getElementById("cadTo").value = 0;
let sgdTo = document.getElementById("sgdTo").value = 0;
let inrTo = document.getElementById("inrTo").value = 0;
let gbpTo = document.getElementById("gbpTo").value = 0;
let usdTo = document.getElementById("usdTo").value = 0;
let out = document.getElementById("out").value = 0;
let amount = document.getElementById("amount");
let form = document.getElementById("form").value = 0;
let to = document.getElementById("to").value = 0;



// if(form == cadFId && to == eurTo ){
//     document.getElementById("out").value = amount * eurTo * 2;
// }

	
form.onchange = function (){
	"use strict";
	out.innerHTML =`Worth  ${amount * form.value} €`;
}	
