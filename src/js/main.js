const barsMenu = document.querySelector('.nav__box__menu__burger')
const menuBox = document.querySelector('.nav__box__menu__elements')
const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')
const disclaimerBtn = document.querySelector('.disclaimer__btn')
const disclaimerText = document.querySelector('.disclaimer__text')
const questions = document.querySelectorAll('.question__box__element')
const allAnswerText = document.querySelectorAll('.question__box__element--text')

const openMenu = () => {
    menuBox.classList.toggle('nav__box__menu__elements--open')
} 

const closeNavbar = () => {
    menuBox.classList.remove('nav__box__menu__elements--open')
 }

 const checkAnswerShow = () => {
    allAnswerText.forEach(answerText => {
        if(answerText.classList.contains('question__box__element--show')) {
            answerText.classList.remove('question__box__element--show')
        }
    })
}

const showAnswer = (e) => {
    checkAnswerShow()
    const answerText = e.target.querySelector('.question__box__element--text')
    answerText.classList.toggle('question__box__element--show')
}


questions.forEach(question => {
    question.addEventListener('click', showAnswer)
})

const showCookie = () => {
    const cookieEaten = localStorage.getItem('cookie')
    if (cookieEaten) {
        cookieBox.classList.add('hide-cookies')
    }
}

const handleCookieBox = () => {
    localStorage.setItem('cookie', 'true')
    cookieBox.classList.add('hide-cookies')
}

const handleCookieBoxDisclaimer = () => {
    disclaimerText.classList.toggle('hide-cookies')

   switch(disclaimerBtn.textContent.toLowerCase()) {
    case "pokaż zastrzeżenia":
    disclaimerBtn.textContent = 'ukryj zastrzeżenia'
    break
    case "ukryj zastrzeżenia":
    disclaimerBtn.textContent = 'pokaż zastrzeżenia'
    break
   }
}

const footerYear = document.querySelector('.footer--year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

barsMenu.addEventListener('click', openMenu)
menuBox.addEventListener('click', closeNavbar)
cookieBtn.addEventListener('click', handleCookieBox)
disclaimerBtn.addEventListener('click', handleCookieBoxDisclaimer)
document.addEventListener('DOMContentLoaded', showCookie)

handleCurrentYear()