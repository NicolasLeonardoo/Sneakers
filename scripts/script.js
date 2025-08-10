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

    // Atualiza o gradiente com base no tênis central
    atualizarGradiente();

    clearTimeout(unAccceptClick);
    unAccceptClick = setTimeout(() => {
        proxButton.style.pointerEvents = 'auto';
        antButton.style.pointerEvents = 'auto';
    }, 2000);
}

function atualizarGradiente() {
    let itemCentral = document.querySelector('.carrossel .lista .item:nth-child(2)');
    let nomeTenis = itemCentral.querySelector('.topico').innerText.trim();
    if (gradientes[nomeTenis]) {
        document.documentElement.style.setProperty('--gradiente-fundo', gradientes[nomeTenis]);
    }
}
verMaisButtons.forEach(button => {
    button.onclick = function() {
        carrossel.classList.add('mostrarMais');
    }
})
voltarButton.onclick = function() {
    carrossel.classList.remove('mostrarMais');
}

const gradientes = {
    "Air Jordan 1 High OG": "radial-gradient(circle, #FF3B3F, #000000)",
    "Air Jordan 4 Thunder": "radial-gradient(circle,rgb(214, 218, 11), #1a1a1a)",
    "Dunk Low": "radial-gradient(circle, #7ED56F, #FFFFFF)",
    "Kyrie 1 'Letterman'": "radial-gradient(circle, #FFD700, #00BFFF)",
    "Blazer Mid x OFF-WHITE": "radial-gradient(circle,rgb(248, 209, 142),rgb(248, 224, 167))"
};

// Atualiza o gradiente ao carregar a página
atualizarGradiente();
