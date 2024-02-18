$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});

const imageSlide = document.getElementById('image-slide')
const certContainer = document.getElementById("certsImageContainer")
const overlay = document.querySelector(".overlay")
overlay.addEventListener("click",() => {
    overlay.style.display = "none"
    overlay.innerHTML = ""
})

const buttons = document.querySelectorAll("[data-carousel-button]")
function changeSlide(slides,direction) {
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + direction
    if(newIndex < 0 ) newIndex = slides.children.length-1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = 1
    delete activeSlide.dataset.active
}
buttons.forEach(button => {
    button.addEventListener("click",() => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]')
        changeSlide(slides,offset)
    })
})

setInterval(() => {
    const slides = document.querySelector('[data-slides]')
    changeSlide(slides,1)
},3000)

for(let i =1;i <= 6; i ++){
    let listImage = document.createElement('li')
    let img = document.createElement('img')
    img.src = `./images/image_carousel/${i}.jpg`
    listImage.classList.add("slide")
    listImage.appendChild(img)
    if(i === 1){
        listImage.setAttribute('data-active','')
    }
    imageSlide.appendChild(listImage)
}




for (let i = 1; i <= 13; i++) {
    let divCard = document.createElement('div')
    let img = document.createElement('img')
    let imgOverlay = document.createElement('img')
    divCard.classList.add("card")
    img.src = `./images/cert/${i}.jpg`
    imgOverlay.src = `./images/cert/${i}.jpg`
    img.classList.add("cert-img")
    img.addEventListener('click',() => {
        overlay.appendChild(imgOverlay)
        overlay.style.display = "block"
    })
    divCard.appendChild(img)
    certContainer.appendChild(divCard)
}


