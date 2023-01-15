const mainCotainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitButton = document.getElementById('submit');
const rates = document.querySelectorAll('.btn');
const rating = document.getElementById('rating')
const rateAgainButton = document.getElementById('rating-btn')


function myFunction() {
    
  }
submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove("hidden");
    mainCotainer.style.display = "none"
})

rateAgainButton.addEventListener('click', () => {
    thanksContainer.classList.add('hidden')
    mainCotainer.style.display = "block"
})


rates.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML
        console.log (rating.innerHTML)
    })
})