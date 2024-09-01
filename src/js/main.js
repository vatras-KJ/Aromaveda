const barsMenu = document.querySelector('.nav__box__menu__burger')
const menuBox = document.querySelector('.nav__box__menu__elements')

const openMenu = () => {
    menuBox.classList.toggle('nav__box__menu__elements--open')
} 

const closeNavbar = () => {
    menuBox.classList.remove('nav__box__menu__elements--open')
 }

barsMenu.addEventListener('click', openMenu)
menuBox.addEventListener('click', closeNavbar)


const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')
const disclaimerBtn = document.querySelector('.disclaimer__btn')
const disclaimerText = document.querySelector('.disclaimer__text')

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

cookieBtn.addEventListener('click', handleCookieBox)
disclaimerBtn.addEventListener('click', handleCookieBoxDisclaimer)
showCookie()