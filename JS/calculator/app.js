function getHistory() {
 return document.getElementById("history-value").innerText;
}
function printHistoryValue(num) {
  document.getElementById("history-value").innerText=num;
}
function getOutPut() {
  return document.getElementById("output-value").innerText;
 }
 function printOutPut(num) {
   if(num==""){
    document.getElementById("output-value").innerText=num;
   }else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
   }


  }
    function getFormattedNumber(num) {
      if(num=="-"){
        return "";
      }
      let n = Number(num);
      let value = n.toLocaleString("en");
      return value;
   }
   
function reversNumberFormat(num) {
  return Number(num.replace(/,/g,''));
}
let operator = document.getElementsByClassName("operator");
for( i=0; i<operator.length ;i++){
  operator[i].addEventListener('click',function () { 
      if(this.id =="clear"){
        printHistory("");
        printOutPut("");
      }else if(this.id == "backspace"){
        let output = reversNumberFormat(getOutPut()).toString();
        if(output){
          output = output.substr(0,output.length-1);
          printOutPut(output);
        }else{
          let output = getOutPut();
          let history = getHistory();
          if(output !==""){
            output= reversNumberFormat(output);
            history = history+output;
            if(this.id=="="){
              let result = eval(history);
              printOutPut(result);
              printHistory("");
            }else{
              history = history+this.id;
              printHistory(history);
              printOutPut("");
            }
          }
        }

      }
  });
}
let number =document.getElementsByClassName("number");
for( let i=0; i<number.length; i++){
  number[i].addEventListener('click',function(){
    let output = reversNumberFormat(getOutPut());
    if(output!=Nan){
      output = output+this.id;
      printOutPut(output);
    }
  })
}
