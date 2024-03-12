const snow = document.createElement('img')
document.querySelector('body').prepend(snow)
snow.src = 'medias/img/snow-outline.svg'
snow.style.position = 'absolute'
snow.style.display = 'flex'
snow.style.height = '50px'
snow.style.zIndex = '1000'
snow.style.left = `${randomPosX()}vw`

function randomPosX() {
    let random = Math.floor(Math.random() * 90 + 5)
    return random
}

const body = document.body

//il manque une animation css de translation vers le bas pour les flocons et une boucle pour en faire apparaitre plusieurs.
// peut être mettre un random aussi sur le délai d'apparitions.
