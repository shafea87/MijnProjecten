let yourName = prompt("What is yor name");
document.getElementById('yourName').innerHTML = "Welcom " + yourName;



document.getElementById('container').addEventListener('click',onClick);
let bValue=0,
    aValue=0,
    dValue=0,
    nValue=0,
    fValue=0,
    cValue=0,
    tmp=0;
function onClick(e){
 tmp++;
 if(tmp<=5){
  if(e.target.className == "inner-5"){
    aValue+=100;
     document.getElementById('result1').value=aValue;
 
  }else if(e.target.className == "inner-4"){

  bValue+=80;
   document.getElementById('result2').value=bValue;
 
    }else if(e.target.className == "inner-3"){
   
     cValue+=60; 
     document.getElementById('result3').value=cValue;
    }else if(e.target.className == "inner-2"){
      dValue+=40;
      document.getElementById('result4').value=dValue;

    }else if(e.target.className == "inner-1"){
      fValue+=20;
      document.getElementById('result5').value=fValue;
 
    }else{
      nValue+=10;
      document.getElementById('result6').value=nValue;

    }

    
   document.getElementById("total").value = aValue + bValue + cValue + dValue + nValue + fValue;

  } else{
    //alert("");
   let some= confirm("Game finished! start new Game?");
   if(some){
console.log(some);
location.reload();
return false;
   } else{
    // return;
     location.assign("https://www.google.com");
   }
   
  }
    
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }
}











