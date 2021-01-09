function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



for(i=1;i<=56; i++ ){
  const newCir = document.createElement('div');

   newCir.style.backgroundColor=`rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`;
   let point=getRndInteger(1,100);
   newCir.innerText=point;
  //  newCir.value=newCir.innerText;
   newCir.className = 'gool';

  //newCir.id = 'gool'+i;
 
  document.querySelector('#sec').appendChild(newCir); }

  const circleList=document.querySelector('#sec') ;
  circleList.addEventListener('click',addValue);
  let clicks=0;
  let total=0;  
  //prompt
  function addValue(e){
        if(e.target.classList.contains('gool')){
          clicks++;
          let temp=parseInt(e.target.innerText);
          total=total+temp;
          // e.target.remove();
          e.target.style="visibility:hidden";
        //  console.log(typeof(parseInt(e.target.innerText)));
        //document.createElement
        // console.log(parseInt(e.target.innerText));

        document.getElementById('total').value=clicks;
        document.getElementById('total2').value=total;
        if(clicks==10){
         let final=confirm('you have finished your turn 10 clicks!! your result is '+total);
         if(final){
           clicks=0;
          total=0; 
          location.reload();
        }
           
         // break;
        }
        console.log(`clicks= ${clicks} , total= ${total}`);
        }
    }



//  let ns = document.querySelector('section');
//   ns.addEventListener('click',removeElement);
  
  
  // function removeElement(e){
  //   let sum;
  //   sum=[];
  //   y = e.target.value;
  //   i=sum.push(y);

  //   while(sum[i]===0 ){
  //     sum.push(y[i]);
  //     i++;
  //     console.log(sum);

  //     e.target.remove();
     
  //     }   }
              

  // var cars = ["BMW", "Volvo", "Saab", "Ford"];
  // var i = 0;
  // var text = "";
  // while (cars[i]) {
  //   text += cars[i] + "<br>";
  //   i++;
  // }





