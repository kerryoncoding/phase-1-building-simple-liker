// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeAction(element){
  mimicServerCall()
  .then(()=> {
    element.target.className = "activated-heart";
    element.target.innerText = FULL_HEART})
  .catch(()=> {
    console.log("failure")
    const note = document.querySelector("h2")
    console.log(note)
    note.className = "";
    setTimeout(()=>{
      note.className = "hidden"
    }, 3000)
  })
  //console.log("I was clicked") 
}

const collection = document.querySelectorAll(".like-glyph")

collection.forEach(function(element){
  element.addEventListener("click", likeAction);
  console.log(element)
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
