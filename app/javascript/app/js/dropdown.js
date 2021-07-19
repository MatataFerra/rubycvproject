const menu = document.getElementById('dropdown__user-menu')
const img = document.getElementById('navbar__profile-img')


const showMenu = () => {
    menu.style.display = 'block'
}

img.addEventListener('click', showMenu)

