
document.getElementById('container').addEventListener('click',onClick);
function onClick(e){
 
  let aValue = document.getElementById('result1').value;
  let bValue = document.getElementById('result2').value;
  let cValue = document.getElementById('result3').value;
  let dValue = document.getElementById('result4').value;
  let nValue = document.getElementById('result5').value;
  let fValue = document.getElementById('result6').value;

  

  if(e.target.className == "inner-5"){
    document.getElementById('result1').value = 100;
  }else if(e.target.className == "inner-4"){
    document.getElementById('result2').value = 80 ;
    }else if(e.target.className == "inner-3"){
      document.getElementById('result3').value = 60 ;
    }else if(e.target.className == "inner-2"){
        document.getElementById('result4').value = 40 ;
    }else if(e.target.className == "inner-1"){
      document.getElementById('result5').value = 20 ;
    }else{
      document.getElementById('result6').value = 0 ;
    }

   document.getElementById("total").value = 
   document.getElementById('result1').value+
    document.getElementById('result2').value+
   document.getElementById('result3').value+
    document.getElementById('result4').value+
  document.getElementById('result5').value+
  document.getElementById('result6').value;
    
}



