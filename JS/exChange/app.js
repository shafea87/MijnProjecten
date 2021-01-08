let cadFId = document.getElementById("cadFId").value;
let inrFId = document.getElementById("inrFId").value;
let gbpFId = document.getElementById("gbpFId").value;
let usdFId = document.getElementById("usdFId").value;
let eurFId = document.getElementById("eurFId").value;
let audFId = document.getElementById("audFId").value;
let sgdFId = document.getElementById("sgdFId").value;

let eurTo = document.getElementById("eurTo").value;
let audTo = document.getElementById("audTo").value;
let cadTo = document.getElementById("cadTo").value;
let sgdTo = document.getElementById("sgdTo").value;
let inrTo = document.getElementById("inrTo").value;
let gbpTo = document.getElementById("gbpTo").value;
let usdTo = document.getElementById("usdTo").value;
let out = document.getElementById("out");




let form = document.getElementById("form").value ;
let to = document.getElementById("to").value;
function sum(){
	
	let amount = document.getElementById("amount").value;
	if(cadFId == "CAD" && eurTo == "EUR"){
		out.innerHTML =  amount+ " CAD = "  +   amount*0.638902 + " EUR"; 
	}else if(cadFId == "CAD" && gbpTo == "GBP"){
		out.innerHTML = amount+ " CAD = "  +  amount*0.576691 + " GBP"; 
	}else if(cadFId == "CAD" && audTo == "AUD"){
		out.innerHTML = amount+ " CAD = "  +   amount*1.02724 + " AUD"; 
	}else if(cadFId == "CAD" && sgdTo == "SGD"){
		out.innerHTML = amount+ " CAD = "  +  amount*1.03598 + " SGD"; 
	}else if(cadFId == "CAD" && inrTo == "INR"){
		out.innerHTML = amount+ " CAD = "  + amount*57.4595 + " INR"; 
	}else if(cadFId == "CAD" && usdTo == "USD"){
		out.innerHTML = amount+ " CAD = "  +   amount*0.777150 + " USD";
	}else{
		out.innerHTML = "Not Priese";
	}
	//INR
	if(inrFId == "INR" && eurTo == "EUR"){
		out.innerHTML =  amount+ " INR = "  + amount*0.0111419+ " EUR"; 
	}else if(inrFId == "INR" && gbpTo == "GBP"){
		out.innerHTML = amount+ " INR = "  +   amount*0.0101375 + " GBP"; 
	}else if(inrFId == "INR" && audTo == "AUD"){
		out.innerHTML = amount+ " INR = "  + amount*0.0178721 + " AUD"; 
	}else if(inrFId == "INR" && sgdTo == "SGD"){
		out.innerHTML = amount+ " INR = "  + amount*0.0180518 + " SGD"; 
	}else if(inrFId == "INR" && cadTo == "CAD"){
		out.innerHTML = amount+ " INR = "  + amount*0.0174826 + " CAD"; 
	}else if(inrFId == "INR" && usdTo == "USD"){
		out.innerHTML = amount+ " INR = "  +  amount*0.0135866 + " USD";
	}else{
		out.innerHTML = "Not Priese";
	}
	//GBP
	if(gbpFId == "GBP" && eurTo == "EUR"){
		out.innerHTML =  amount+ " GBP = "  + amount*1.09825 + " EUR"; 
	}else if(gbpFId == "GBP" && inrTo == "INR"){
		out.innerHTML = amount+ " GBP = "  + amount*98.5665 + " INR"; 
	}else if(gbpFId == "GBP" && audTo == "AUD"){
		out.innerHTML = amount+ " GBP = "  + amount*1.76171 + " AUD"; 
	}else if(gbpFId == "GBP" && sgdTo == "SGD"){
		out.innerHTML = amount+ " GBP = "  + amount*1.77935 + " SGD"; 
	}else if(gbpFId == "GBP" && cadTo == "CAD"){
		out.innerHTML = amount+ " GBP = "  + amount*1.72336 + " CAD"; 
	}else if(gbpFId == "GBP" && usdTo == "USD"){
		out.innerHTML = amount+ " GBP = "  + amount*1.34023 + " USD";
	}else{
		out.innerHTML = "Not Priese";
	}
	//USD
	if(usdFId == "USD" && eurTo == "EUR"){
		out.innerHTML =  amount+ " USD = "  + amount*0.820092 + " EUR"; 
	}else if(usdFId == "USD" && gbpTo == "INR"){
		out.innerHTML = amount+ " USD = "  +  amount*73.6019 + " INR"; 
	}else if(usdFId == "USD" && audTo == "AUD"){
		out.innerHTML = amount+ " USD = "  +  amount*1.31551 + " AUD"; 
	}else if(usdFId == "USD" && sgdTo == "SGD"){
		out.innerHTML = amount+ " USD = "  +  amount*1.32868 + " SGD"; 
	}else if(usdFId == "USD" && cadTo == "CAD"){
		out.innerHTML = amount+ " USD = "  +  amount*1.28687 + " CAD"; 
	}else if(usdFId == "USD" && gbpTo == "GBP"){
		out.innerHTML = amount+ " USD = "  +  amount*0.746724 + " GBP";
	}else{
		out.innerHTML = "Not Priese";
	}
	//EUR
	if(eurFId == "EUR" && usdTo == "USD"){
		out.innerHTML =  amount+ " EUR = "  +  amount*1.21938+ " USD"; 
	}else if(eurFId == "EUR" && gbpTo == "INR"){
		out.innerHTML = amount+ " EUR = "  + amount*89.7484 + " INR"; 
	}else if(eurFId == "EUR" && audTo == "AUD"){
		out.innerHTML = amount+ " EUR = "  +  amount*1.60410 + " AUD"; 
	}else if(eurFId == "EUR" && sgdTo == "SGD"){
		out.innerHTML = amount+ " EUR = "  +  amount*1.62016 + " SGD"; 
	}else if(eurFId == "EUR" && cadTo == "CAD"){
		out.innerHTML = amount+ " EUR = "  +  amount*1.56918 + " CAD"; 
	}else if(eurFId == "EUR" && gbpTo == "GBP"){
		out.innerHTML = amount+ " EUR = "  +  amount*0.910536 + " GBP";
	}else{
		out.innerHTML = "Not Priese";
	}
	//
	if(audFId == "AUD" && usdTo == "USD"){
		out.innerHTML =  amount+ " AUD = "   +  amount*0.760161+ " USD"; 
	}else if(audFId == "AUD" && gbpTo == "INR"){
		out.innerHTML = amount+ " AUD = "   +  amount*55.9493 + " INR"; 
	}else if(audFId == "AUD" && eurTo == "EUR"){
		out.innerHTML = amount+ " AUD = "   +  amount*0.623402 + " EUR"; 
	}else if(audFId == "AUD" && sgdTo == "SGD"){
		out.innerHTML = amount+ " AUD = "   +  amount*1.01001 + " SGD"; 
	}else if(audFId == "AUD" && cadTo == "CAD"){
		out.innerHTML = amount+ " AUD = "  +  amount*0.978230 + " CAD"; 
	}else if(audFId == "AUD" && gbpTo == "GBP"){
		out.innerHTML = amount+ " AUD = "   +  amount*0.567630 + " GBP";
	}else{
		out.innerHTML = "Not Priese";
}
//SGD
if(sgdFId == "SGD" && usdTo == "USD"){
	out.innerHTML =  amount+ " SGD = "  +  amount*0.752627+ " USD"; 
}else if(sgdFId == "SGD" && gbpTo == "INR"){
	out.innerHTML = amount+ " SGD = "   +  amount*55.3948 + " INR"; 
}else if(sgdFId == "SGD" && eurTo == "EUR"){
	out.innerHTML = amount+ " SGD = "   +  amount*0.617223+ " EUR"; 
}else if(sgdFId == "SGD" && audTo == "AUD"){
	out.innerHTML = amount+ " SGD = "   +  amount*0.990089 + " AUD"; 
}else if(sgdFId == "SGD" && cadTo == "CAD"){
	out.innerHTML = amount+ " SGD = "  +  amount*0.968535 + " CAD"; 
}else if(sgdFId == "SGD" && gbpTo == "GBP"){
	out.innerHTML = amount+ " SGD = "  +  amount*0.562004+ " GBP";
}else{
	out.innerHTML = "Not Priese";
}

}