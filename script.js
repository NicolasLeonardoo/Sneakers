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