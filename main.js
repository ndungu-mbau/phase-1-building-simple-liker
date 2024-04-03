// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

  // Select all the like buttons
  const likeButtons = document.querySelectorAll('.like')

  // Add an event listener to each like button
  likeButtons.forEach(likeButton => {

    // Add an event listener to each like button
    likeButton.addEventListener('click', () => {
      const glyph = likeButton.querySelector('.like-glyph')
      if(glyph.classList.contains('activated-heart')){
        glyph.textContent = EMPTY_HEART
        glyph.classList.remove('activated-heart')
      } else {
        mimicServerCall()
          .then(data => {
            glyph.textContent = FULL_HEART
            glyph.classList.add('activated-heart')
          })
          .catch(err => {
            const modal = document.getElementById('modal')
            modal.classList.remove('hidden')
            const modalMessage = document.getElementById('modal-message')
            modalMessage.textContent = err

            setTimeout(() => {
              modal.classList.add('hidden') 
            }, 3000)
          })
      }
    })
  })
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
