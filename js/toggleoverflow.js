const html = document.querySelector('html');

const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
    html.classList.toggle('overflow-hidden')
})