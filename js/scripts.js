//Carousel - first

const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('#arrow_left')
const show = document.querySelector('.show')
const btnNext = document.getElementById('#arrow_right')
const dots = document.querySelectorAll('.img_dot')


let currentSlide = 0
let currentDot = 0


function changePrevDot() {
    dots.forEach(item => item.classList.remove('btn-on'))
}

function changeNextDot() {
    dots[currentDot].classList.add('btn-on')
}

 function next (){
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
}

function prev() {
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
}

//Adopt Modal

let btn_modal_adopt = document.querySelector('#btn-adopt')
let btn_modal_adopt2 = document.querySelector('.btn_apply_adopt')
let btn_modal_adopt3 = document.querySelector('.btn_apply_adopt_adopt_info')
let modal_adopt = document.querySelector('#modal_adopt')
let cancel_modal = document.querySelector('#btn-cancel-modal')


btn_modal_adopt.addEventListener('click', () => {
    modal_adopt.showModal()
    modal_adopt.classList.add('translate')
})

btn_modal_adopt2.addEventListener('click', () => {
    modal_adopt.showModal()
    modal_adopt.classList.add('translate')
})

btn_modal_adopt3.addEventListener('click', () => {
    modal_adopt.showModal()
    modal_adopt.classList.add('translate')
})

cancel_modal.addEventListener('click', () => {
    modal_adopt.close()
    modal_adopt.classList.remove('translate')
})

//Donate Modal

let btn_donate_header = document.querySelector('#btn-donate')
let btn_modal_donate_main = document.querySelector('#btn-donate-main')
let modal_donate = document.querySelector('#modal_donate')
let cancel_modal_donate = document.querySelector('#btn-cancel-modal-donate')

btn_donate_header.addEventListener('click', () => {
    modal_donate.showModal()
    modal_donate.classList.add('translate')
})

btn_modal_donate_main.addEventListener('click', () => {
    modal_donate.showModal()
    modal_donate.classList.add('translate')
})

cancel_modal_donate.addEventListener('click', () => {
    modal_donate.close()
    modal_donate.classList.remove('translate')
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


//Form donate verification

let btnDonate = document.querySelector('#btn-donate-modal')
let email2 = document.querySelector('#email_donate')
let valueDonate = document.querySelector('#value_donate')
let checkPix = document.querySelector('#pix')
let checkCreditCard = document.querySelector('#credit_card')
let checkOthers = document.querySelector('#others')
let divCheckPix = document.querySelector('.div_pix')
let divCheckCreditCard = document.querySelector('.div_credit_card')
let divCheckOthers = document.querySelector('.div_others')

// Verifications of the payment mthod

checkPix.addEventListener('click', () => {
    checkCreditCard.checked = false
    checkOthers.checked = false
    divCheckPix.style.backgroundColor = '#3F96FC'
    divCheckCreditCard.style.backgroundColor = '#ffffff'
    divCheckOthers.style.backgroundColor = '#ffffff'
})

checkCreditCard.addEventListener('click', () => {
    checkPix.checked = false
    checkOthers.checked = false
    divCheckCreditCard.style.backgroundColor = '#3F96FC'
    divCheckPix.style.backgroundColor = '#ffffff'
    divCheckOthers.style.backgroundColor = '#ffffff'
})

checkOthers.addEventListener('click', () => {
    checkCreditCard.checked = false
    checkPix.checked = false
    divCheckOthers.style.backgroundColor = '#3F96FC'
    divCheckCreditCard.style.backgroundColor = '#ffffff'
    divCheckPix.style.backgroundColor = '#ffffff'
})

//regex to verifications
regexEmail2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
regexValue = /^[1-9]\d*$/


btnDonate.addEventListener('click', () => {
    if (email2.value !== '' && valueDonate.value !== '') {
        if(checkPix.checked == true || checkCreditCard.checked == true || checkOthers.checked == true){
            if(regexEmail2.test(email2.value) == true && regexValue.test(valueDonate.value) == true){
                window.location.href = 'success.html'
            }else {
                alert("The form has fields with incorrect values, try again!")
            }
        }else {
            alert("the form has empty fields, try again!")
        }
    }else {
        alert("the form has empty fields, try again!")
    }
})


