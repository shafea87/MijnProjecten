// variables
const tweetList = document.getElementById('tweet-list');



// Eventlisner

eventlisners();
function eventlisners(){
  document.querySelector('#form').addEventListener('submit', newTweet);
}

// Function
function newTweet(e){
  e.preventDefault();
  //read the textarea value
  const twet=document.getElementById('tweet').value;
  //create remove button
  remButton = document.createElement('a');
  remButton.classList = 'remove-tweet';
  remButton.textContent = 'X';


  // console.log(tweet);
  li=document.createElement('li');
  li.textContent = twet;
  li.appendChild(remButton);
  tweetList.appendChild(li); 
 
  
}

