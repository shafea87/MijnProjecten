// var spelerAanzet=2;
//     function neerzeten(blockNummer){
//       console.log(blockNummer);
//       var mijnblock=document.getElementById("block"+blockNummer);
//       if(spelerAanzet==1){
//         mijnblock.innerHTML="0";
//         spelerAanzet=2;
//       } else{
//          mijnblock.innerHTML="X";
//          spelerAanzet=1;
//       }
//       //console.log("hoi ik ga begenin");
//     }

var temp=2;
var win=["X","X","X"];
function chang(divNum){
console.log(divNum);
var myblock=document.getElementById("block"+divNum);
var currentElement=myblock.innerHTML;
if(myblock.innerHTML !="."){
    alert("can not choose this squer any more");
   //confirm("hello");
   //prompt("hi");
} else{
        if(temp==1){
            myblock.innerHTML="O";
            temp=2;   
        } else {
            myblock.innerHTML="X";  
            temp=1;
        }
       checkValue();
        
      }

 
 function checkValue(){
    
   //console.log(win[0]);
     var firstrow=document.getElementsByClassName("row1");
    //console.log(firstrow[2]);
      for(var x=0;x<firstrow.length;x++){
        //  console.log(firstrow[x]);
        //
        if(firstrow[0].innerHTML=="X"&&firstrow[1].innerHTML=="X"&&firstrow[2].innerHTML=="X"||
        firstrow[3].innerHTML=="X"&&firstrow[4].innerHTML=="X"&&firstrow[5].innerHTML=="X"||
        firstrow[6].innerHTML=="X"&&firstrow[7].innerHTML=="X"&&firstrow[8].innerHTML=="X"||
        firstrow[0].innerHTML=="X"&&firstrow[4].innerHTML=="X"&&firstrow[8].innerHTML=="X"||
        firstrow[2].innerHTML=="X"&&firstrow[4].innerHTML=="X"&&firstrow[6].innerHTML=="X"
        ){
          alert("it is X");
          location.replace("index.html");
        }
       
          if(firstrow[0].innerHTML=="O"&&firstrow[1].innerHTML=="O"&&firstrow[2].innerHTML=="O"||
        firstrow[3].innerHTML=="O"&&firstrow[4].innerHTML=="O"&&firstrow[5].innerHTML=="O"||
        firstrow[6].innerHTML=="O"&&firstrow[7].innerHTML=="O"&&firstrow[8].innerHTML=="O"||
        firstrow[0].innerHTML=="O"&&firstrow[4].innerHTML=="O"&&firstrow[8].innerHTML=="O"||
        firstrow[2].innerHTML=="O"&&firstrow[4].innerHTML=="O"&&firstrow[6].innerHTML=="O"
        ){
            alert("it is O");
            location.reload();}
    //      } else{
    //          console.log("not X");
    //         // return;
         }
     }

 }           
