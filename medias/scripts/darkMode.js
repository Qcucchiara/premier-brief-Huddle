let headerButton = document.querySelector('.header a')
let background = document.querySelectorAll('*')

headerButton.addEventListener('click', darkMode)

function darkMode() {
    background.forEach((element) => {
        element.classList.toggle('dark-mode')
    })
    everythingInFooter.forEach((element) => {
        element.classList.remove('dark-mode')
    })
}
