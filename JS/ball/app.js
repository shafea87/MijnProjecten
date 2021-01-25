
document.querySelector('form').addEventListener('submit',function(e){
const gamerNam = document.getElementById('player').value;

let names;
if(localStorage.getItem('names')===null){
  names = [];
}else{
  names = JSON.parse(localStorage.getItem('names'));
}

names.push(gamerNam);

const viName = JSON.parse(localStorage.getItem('names'));
viName.forEach(function (item) {
  
  console.log(item);
});

if (e.target.id='submit'){
    console.log(e.target.id);
  const vie = document.querySelector('main');
  const form = document.querySelector('#section3');
    vie.style.visibility = 'visible';
    form.style.display = 'none';
  
  }
  e.preventDefault();
});






function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



for(i=1;i<=56; i++ ){
  const newCir = document.createElement('div');

   newCir.style.backgroundColor=`rgb(${getRndInteger(0,255)},${getRndInteger(0,255)},${getRndInteger(0,255)})`;
   let point=getRndInteger(1,100);
   newCir.innerText=point;
   newCir.className = 'gool';
 
  document.querySelector('#section2').appendChild(newCir); }

  const circleList=document.querySelector('#section2') ;
  circleList.addEventListener('click',addValue);
  let clicks=0;
  let total=0;  
  function addValue(e){
        if(e.target.classList.contains('gool')){
          clicks++;
          let temp=parseInt(e.target.innerText);
          total=total+temp;
          e.target.style="visibility:hidden";

        document.getElementById('total').value=clicks;
        document.getElementById('total2').value=total;
        
        const gamerScore = document.getElementById('total2').value;

        if(clicks==10){
          
        let score;
        if(localStorage.getItem('score')===null){
          score = [];
        }else{
          score = JSON.parse(localStorage.getItem('score'));
        }

        score.push(gamerScore);
        localStorage.setItem('score',JSON.stringify(score));

        const viScore = JSON.parse(localStorage.getItem('score'));
        viScore.forEach(function (item) {
         
          console.log(item);
          const row = document.createElement('tr');
          row.innerHTML=`
            <tr>
              <td>${item}</td>
            </tr>
          `
        });
          
         let final=confirm('you have finished your turn 10 clicks!! your result is '+total);
         if(final){
           clicks=0;
          total=0; 
          location.reload();
        }
        }
        }
    }




  
  





