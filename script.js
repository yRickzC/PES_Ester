document.addEventListener('DOMContentLoaded', () => {
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');
    const card = document.querySelector('.glass-card');
    const layers = {
        initial: document.getElementById('bg-initial'),
        sim: document.getElementById('bg-sim'),
        sim2: document.getElementById('bg-sim-2'),
        nao: document.getElementById('bg-nao')
    };

    let carouselInterval = null;

    /**
     * Função para trocar a camada ativa com um efeito de fade suave.
     * @param {string} activeKey - A chave da camada que deve ficar visível
     */
    function switchBackground(activeKey) {
        Object.keys(layers).forEach(key => {
            if (key === activeKey) {
                layers[key].classList.add('active');
            } else {
                layers[key].classList.remove('active');
            }
        });
    }

    function startSuccessCarousel() {
        let current = 0;
        const successKeys = ['sim', 'sim2'];

        switchBackground(successKeys[current]);

        carouselInterval = setInterval(() => {
            current = (current + 1) % successKeys.length;
            switchBackground(successKeys[current]);
        }, 2000); // Troca a cada 5 segundos
    }

    // Eventos de Clique
    btnSim.addEventListener('click', () => {
        console.log('Escolheu SIM');
        card.classList.add('hidden');
        startSuccessCarousel();
    });

    btnNao.addEventListener('click', () => {
        console.log('Escolheu NÃO');
        card.classList.add('hidden');
        switchBackground('nao');
    });
});
