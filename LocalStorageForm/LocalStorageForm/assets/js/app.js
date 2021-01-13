// variables
const tweetList=document.getElementById('tweet-list');
eventListeners();
// event listener
function eventListeners(){
document.querySelector('#form').addEventListener('submit',newTweet);
tweetList.addEventListener('click',removeTweet);
//DOM
document.addEventListener('DOMContentLoaded',localStoragOnLoad);

}




//functions
function newTweet(e){
    e.preventDefault();
    // console.log('form submitted');
    const twet=document.getElementById('tweet').value;
  
// remove the remoe butten
const removeBtn=document.createElement('a');
removeBtn.classList='remove-tweet';
removeBtn.textContent='X';

// creat Li element
    const liTmp=document.createElement('li');
    liTmp.textContent=twet;

    liTmp.appendChild(removeBtn);
    
tweetList.appendChild(liTmp);
    //console.log(twet);
//    console.log('item added');
// document.getElementById('tweet').value='';
addTweetLocalStorag(twet);
alert('Tweet Added');
  this.reset();
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
      e.target.parentElement.remove();
    }
    console.log(e.target.parentElement.textContent);
    removeTweetFromlocal(e.target.parentElement.textContent);
    }
    // function removeTweet(e){
// if(e.target.classList.contains('remove-tweet')){
//     console.log('yes');
// }else{
//     console.log('no'); 
// }

// }

function addTweetLocalStorag(twettmp){
    let tweets=getTweetsFromLocalStorag();
    
    // console.log(newtweets);
    tweets.push(twettmp);

    localStorage.setItem('tmptweets',JSON.stringify(tweets));
   const readlocal=localStorage.getItem('tmptweets');
   // print the array before saving to local storage
   console.log(tweets);

   // print the local sorage content (string)
   console.log(readlocal);

   // print the local stoage after convert it to array
   console.log(JSON.parse(readlocal));
}

function getTweetsFromLocalStorag(){
let artweets;
const tweetsLS=localStorage.getItem('tmptweets');
if(tweetsLS==null){
    artweets=[];
} else {
    artweets=JSON.parse(tweetsLS);
}
return artweets;
}

function localStoragOnLoad(){

  let sometwet=getTweetsFromLocalStorag();
  // console.log(sometwet);
  sometwet.forEach(function(twetread){
      const removeBtn=document.createElement('a');
      removeBtn.classList='remove-tweet';
      removeBtn.textContent='X';

      const liTmp=document.createElement('li');
          liTmp.textContent=twetread;

         liTmp.appendChild(removeBtn);
         
      tweetList.appendChild(liTmp); 
  })
}
function removeTweetFromlocal(ltweet){
  let ntweets = getTweetsFromLocalStorag();
  const tweetDelet=ltweet.substring(0,ltweet.length-1);

// console.log(tweetDelet);
//loop througt the tweet and remove the tweet
ntweets.forEach(function(item,index){
  if(item === tweetDelet){
    // console.log('yes');
    ntweets.splice(index,1)
  }
})

localStorage.setItem('tmptweets',JSON.stringify(ntweets));
console.log(ntweets);
}
 