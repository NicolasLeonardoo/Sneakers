let proxButton = document.getElementById('proximo');
let antButton = document.getElementById('anterior');
let voltarButton = document.getElementById('voltar');
let verMaisButtons = document.querySelectorAll('.verMais');
let carrossel = document.querySelector('.carrossel');
let listaHTML = document.querySelector('.carrossel .lista');

proxButton.onclick = function() {
    showSlider('proximo');
}
antButton.onclick = function() {
    showSlider('anterior');
}
const showSlider = (type) => {
    let items = document.querySelectorAll('.carrossel .lista .item');
    if(type == 'proximo'){
        listaHTML.appendChild(items[0]);
        carrossel.classList.add('proximo');
    }
}