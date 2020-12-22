let cadValue = document.getElementById('cadFId');
    eurTo = document.getElementById('eurTo');
    amountValue = document.getElementById('amount').value;

myCurrency.onchange = function (){
  "use strict";
  if(cadFId == eurTo){
	document.getElementById('output').innerHTML ="Worth  " + amountValue * 0.636956; + " €";
}
}

