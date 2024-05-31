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
    //modal_adopt.style.display = 'flex'
    modal_adopt.classList.add('translate')
})

cancel_modal.addEventListener('click', () => {
    modal_adopt.close()
    //modal_adopt.style.display = 'none'
    modal_adopt.classList.remove('translate')
})


//Form adopt verification

let btnAdopt = document.querySelector('#btn-adopt-modal')
let email = document.querySelector('#email_adopt')
let names = document.querySelector('#name_adopt')
let birthDateDay = document.querySelector('#birth_date_day')
let birthDateMonth = document.querySelector('#birth_date_day') 
let birthDateYear = document.querySelector('#birth_date_day') 
let checkBtn = document.querySelector('#check-01')

//regex to verifications
regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
regexName = /^[a-zA-Z\s]+$/
regexDay = /^(?:[1-9]|[12]\d|3[01])$/
regexMonth = /^(?:[1-9]|1[012])$/
regexYear = /^(?:\d{1,3}|1\d{3}|20[0-1]\d|202[0-4])$/

btnAdopt.addEventListener('click', () => {
    if (email.value !== '' && names.value !== '' && birthDateDay.value !== '' && birthDateMonth.value !== '' && birthDateYear.value !== '' && checkBtn.checked == true) {
        if(regexEmail.test(email.value) == true && regexName.test(names.value) == true && regexDay.test(birthDateDay.value) == true && regexMonth.test(birthDateMonth.value) == true && regexYear.test(birthDateYear.value) == true){
            window.location.href = 'success.html'
        }else {
            alert("The form has fields with incorrect values, try again!")
        }
    }else {
        alert("the form has empty fields, try again!")
    }
})