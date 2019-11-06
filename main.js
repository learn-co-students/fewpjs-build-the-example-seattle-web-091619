// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById("modal")
const modalMessage = document.getElementById("modal-message")

document.body.addEventListener("click", function(e) {
  if (e.target.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(function() {
        e.target.innerText = FULL_HEART;
        e.target.classList.toggle("activated-heart");
      })
      .catch(function(err) {
        modal.classList.toggle("hidden");
        modalMessage.innerText = err;
        setTimeout(function() {
          modal.classList.toggle("hidden");
        }, 5000);
      });
  }
  if (e.target.innerText === FULL_HEART) {
    e.target.innerText = EMPTY_HEART;
    e.target.classList.toggle("activated-heart");
  }
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
