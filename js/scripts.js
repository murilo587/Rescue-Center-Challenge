//Carousel - first

const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('#arrow_left')
const btnNext = document.getElementById('#arrow_right')
const dots = document.querySelectorAll('.img_dot')

let currentSlide = 0
let currentDot = 0

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function changePrevDot() {
    dots.forEach(item => item.classList.remove('btn-on'))
}

function changeNextDot() {
    dots[currentDot].classList.add('btn-on')
}

 function next (){
    hideSlider()
    if(currentSlide === slider.length - 1) {
        currentSlide = 0
        currentDot = 0
        changePrevDot()
        changeNextDot()
       
    } else {
        currentSlide++
        currentDot++
        changePrevDot()
        changeNextDot()
    }
    showSlider()
}

function prev() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length - 1
        currentDot = dots.length - 1
        changePrevDot()
        changeNextDot()
    } else {
        currentSlide--
        currentDot--
        changePrevDot()
        changeNextDot()
    }
    showSlider()
}

//Adopt Modal

let btn_modal_adopt = document.querySelector('#btn-adopt')
let modal_adopt = document.querySelector('#modal_adopt')
let cancel_modal = document.querySelector('#btn-cancel-modal')


btn_modal_adopt.addEventListener('click', () => {
    modal_adopt.showModal()
})

cancel_modal.addEventListener('click', () => {
    modal_adopt.close()
})