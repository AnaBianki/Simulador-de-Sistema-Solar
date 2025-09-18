document.addEventListener('DOMContentLoaded', () => {
    const solarSystemContainer = document.querySelector('.solar-system-container');
    const planetInfoModal = document.getElementById('planet-info-content');
    const closeModalButton = planetInfoModal.querySelector('.close-button');
    const modalPlanetName = document.getElementById('modal-planet-name');
    const modalPlanetSize = document.getElementById('modal-planet-size');
    const modalOrbitalPeriod = document.getElementById('modal-orbital-period');
    const modalColor = document.getElementById('modal-color');
    const modalDescription = document.getElementById('modal-description');
    const planetsData = [
        {
            name: 'Mercúrio',
            className: 'mercury',
            size: '4.879 km',
            orbitalPeriod: '8 segundos (fictício)',
            color: 'Cinza Escuro',
            description: 'O menor e mais rápido planeta do nosso sistema solar fictício, com uma superfície rochosa e cinzenta.'
        },
        {
             name: 'Vênus',
            className: 'venus',
            size: '12.104 km',
            orbitalPeriod: '15 segundos (fictício)',
            color: 'Dourado',
            description: 'Um planeta quente e denso, com uma atmosfera dourada e densa que esconde sua superfície.'
        },
        {
             name: 'Terra',
            className: 'earth',
            size: '12.742 km',
            orbitalPeriod: '25 segundos (fictício)',
            color: 'Azul',
            description: 'Nosso lar vibrante, um planeta azul com vida abundante e oceanos profundos.'
        },
        {
             name: 'Marte',
            className: 'mars',
            size: '6.779 km',
            orbitalPeriod: '40 segundos (fictício)',
            color: 'Vermelho',
            description: 'O planeta vermelho, com vastos desertos e calotas polares, um alvo de exploração.'
        },
        {
             name: 'Júpiter',
            className: 'jupiter',
            size: '139.820 km',
            orbitalPeriod: '70 segundos (fictício)',
            color: 'Laranja',
            description: 'Um gigante gasoso majestoso, conhecido por sua Grande Mancha Vermelha e suas muitas luas.'
        },
        {
             name: 'Saturno',
            className: 'saturn',
            size: '116.460 km',
            orbitalPeriod: '100 segundos (fictício)',
            color: 'Bege',
            description: 'O deslumbrante planeta dos anéis, uma maravilha gasosa com um sistema de anéis complexo.'
        },
        {
             name: 'Urano',
            className: 'uranus',
            size: '59.724 km',
            orbitalPeriod: '130 segundos (fictício)',
            color: 'Ciano',
            description: 'Um gigante de gelo azul-esverdeado, que gire de lado em sua órbita.'
        },
        {
            name: 'Netuno',
            className: 'neptune',
            size: '49.244 km',
            orbitalPeriod: '160 segundos (fictício)',
            color: 'Azul Marinho',
            description: 'O planeta mais distante e ventoso, um gigante de gelo azul profundo com ventos supersônicos.'
        }
    ];
    function createSolarSystem() {
        planetsData.forEach(planet => {
            const orbitPath = document.createElement('div');
            orbitPath.classList.add('orbit-path', `${planet.className}-orbit`);
            const planetEl = document.createElement('div');
            planetEl.classList.add('planet', planet.className);

            orbitPath.dataset.name = planet.name;
            orbitPath.dataset.size = planet.size;
            orbitPath.dataset.orbitalPeriod = planet.orbitalPeriod;
            orbitPath.dataset.color = planet.color;
            orbitPath.dataset.description = planet.description;

            orbitPath.addEventListener('click', showPlanetInfo);
            orbitPath.appendChild(planetEl);
            solarSystemContainer.appendChild(orbitPath);
        });
    }
     /**
      * @param {Event} e
      */
     function showPlanetInfo(e) {
        const clickedOrbitPath = e.currentTarget;
    modalPlanetName.textContent = clickedOrbitPath.dataset.name;
    modalPlanetSize.textContent = clickedOrbitPath.dataset.size;
    modalOrbitalPeriod.textContent = clickedOrbitPath.dataset.orbitalPeriod;
    modalColor.textContent = clickedOrbitPath.dataset.color;
    modalDescription.textContent = clickedOrbitPath.dataset.description;
    modalPlanetName.style.color = '#f1c40f';
    planetInfoModal.style.display = 'block';
     }
     function hidePlanetInfo() {
    planetInfoModal.style.display = 'none';
     }
     closeModalButton.addEventListener('click', hidePlanetInfo);
    // Fecha o modal ao clicar fora do conteúdo
    planetInfoModal.addEventListener('click', (e) => {
        if (e.target === planetInfoModal) {
            hidePlanetInfo();
        }
    });
     createSolarSystem();
});