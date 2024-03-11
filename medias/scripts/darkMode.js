const paragraphs = document.querySelectorAll('* p')
const h2 = document.querySelectorAll('* h2')
const h1 = document.querySelectorAll('* h1')
const headerButton = document.querySelector('.header a')
const background = document.querySelectorAll('*')

headerButton.addEventListener('click', darkMode)

function darkMode() {
    if ((headerButton.classList = 'dark-mode')) {
        headerButton.classList.toggle += 'dark-mode'
        paragraphs.forEach((element) => {
            element.style.color = 'white'
        })
        h2.forEach((element) => {
            element.style.color = 'white'
        })
        h1.forEach((element) => {
            element.style.color = 'white'
        })
        headerButton.style.color = 'white'
        body.forEach((element) => {
            element.style.backgroundColor = 'black'
        })
        background.forEach((element) => {
            element.style.backgroundColor = 'black'
        })
    } else {
        paragraphs.forEach((element) => {
            element.style.color = 'black'
        })
        h2.forEach((element) => {
            element.style.color = 'black'
        })
        h1.forEach((element) => {
            element.style.color = 'black'
        })
        headerButton.style.color = 'black'
        body.forEach((element) => {
            element.style.backgroundColor = 'white'
        })
        background.forEach((element) => {
            element.style.backgroundColor = 'white'
        })
    }
}
