let proxButton = document.getElementById('proximo');
let antButton = document.getElementById('anterior');
let voltarButton = document.getElementById('voltar');
let verMaisButtons = document.querySelectorAll('.verMais');
let carrossel = document.querySelector('.carrossel');
let listaHTML = document.querySelector('.carrossel .lista');

proxButton.onclick = function () {
    showSlider('proximo');
}
antButton.onclick = function () {
    showSlider('anterior');
}
let unAccceptClick;
const showSlider = (type) => {
    proxButton.style.pointerEvents = 'none';
    antButton.style.pointerEvents = 'none';

    carrossel.classList.remove('proximo', 'anterior');
    let items = document.querySelectorAll('.carrossel .lista .item');
    if (type == 'proximo') {
        listaHTML.appendChild(items[0]);
        carrossel.classList.add('proximo');
    } else {
        let ultimo = items.length - 1;
        listaHTML.prepend(items[ultimo]);
        carrossel.classList.add('anterior');
    }
    clearTimeout(unAccceptClick);
    unAccceptClick = setTimeout(() => {
        proxButton.style.pointerEvents = 'auto';
        antButton.style.pointerEvents = 'auto';
    }, 2000);
}

verMaisButtons.forEach(button => {
    button.onclick = function() {
        carrossel.classList.add('mostrarMais');
    }
})