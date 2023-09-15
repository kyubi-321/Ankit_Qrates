// Testimonials 
let oneBtn = document.getElementById('one');
let twoBtn = document.getElementById('two');
let circleBtns = document.querySelectorAll('.circle-button');

let testimonialImage = document.getElementById('testimonial-img');
let quote = document.getElementById('quote');
let artist = document.getElementById('artist');

circleBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {

        circleBtns.forEach(btn => btn.classList.remove('circle-active'))

        e.target.classList.toggle('circle-active');

        if(oneBtn.classList.contains('circle-active')){
            testimonialImage.src = 'images/artist_sol.jpg';
            quote.innerText = "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."
            artist.innerText = '-SOL';
        } else {
            testimonialImage.src = 'images/artist_mason.jpg';
            quote.innerText = "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.";
            artist.innerText = "-Mason Lieberman (The Real Folk Blues, 2020)";
        }

    })
})

// FAQ Section
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", event => {
    
    const activeQuestion = document.querySelector(".question.open");
     if(activeQuestion && activeQuestion!==question) {
       activeQuestion.classList.toggle("open");
       activeQuestion.nextElementSibling.style.display = 'none';
     }

    question.classList.toggle("open");
    const answer = question.nextElementSibling;

    if(question.classList.contains("open")) {
        answer.style.display = 'flex';
    }
    else {
        answer.style.display = 'none';
    }
    
  });
})

// Slideshow
window.addEventListener('DOMContentLoaded', ()=> {
    oneBtn.click();

    var imageToChange = document.getElementById('imgs-animation-img');
    var images = [
        'images/sample_4dilla.png',
        'images/sample_all_india.png',
        'images/sample_black_country_disco.png', 
        'images/sample_blarney.png', 
        'images/sample_bombay.png',
        'images/sample_female.png'
    ], 
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function() {
    var currentImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    // set your image using the currentImage
    imageToChange.src = currentImage;
 }, 2000);

 setTimeout(()=> {
    clearInterval(timer);
 }, 26000);


})