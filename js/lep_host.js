const lepi2host = {
    'Atlas Moth': ['Soursop', 'Gimelina', 'Sugar Apple'],
    'Batwing': ['Dutchman pipe', 'Indian Birthwort'],
    'Clipper': ['Wild Cucumber'],
    'Common Jay': ['Avocado Tree', 'Soursop', 'Sugar Apple', 'Amuyon', 'Indian Tree'],
    'Common Lime': ['Limeberry', 'Calamondin', 'Pomelo', 'Sweet Orange', 'Calamansi'],
    'Common Mime': ['Clover Cinnamon', 'Wild Cinnamon'],
    'Common Mormon': ['Limeberry', 'Calamondin', 'Pomelo', 'Sweet Orange', 'Calamansi', 'Lemoncito'],
    'Emerald Swallowtail': ['Curry Leafs', 'Pink Lime-Berry Tree'],
    'Great Eggfly': ['Sweet Potato', 'Water Spinach'],
    'Great Yellow Mormon': ['Limeberry', 'Calamondin', 'Pomelo', 'Sweet Orange', 'Calamansi'],
    'Giant Silk Moth': ['Gmelina Tree'],
    'Golden Birdwing': ['Dutchman pipe', 'Indian Birthwort'],
    'Paper Kite': ['Common Skillpod'],
    'Pink Rose': ['Dutchman Pipe', 'Indian Birthwort'],
    'Plain Tiger': ['Crown flower', 'Giant Milkweed'],
    'Red Lacewing': ['Wild Bush Passion Fruits'],
    'Scarlet Mormon': ['Calamondin', 'Pomelo', 'Sweet Orange', 'Calamansi'],
    'Tailed Jay': ['Avocado Tree', 'Soursop', 'Sugar Apple', 'Amuyon', 'Indian Tree'],
};

function updateHostplants() {
    const butterflySelect = document.getElementById('butterfly');
    const hostplantSelect = document.getElementById('hostplant');
    const selectedButterfly = butterflySelect.value;
    const hostplants = lepi2host[selectedButterfly];

    hostplantSelect.innerHTML = '';
    hostplants.forEach(hostplant => {
        const option = document.createElement('option');
        option.value = hostplant;
        option.textContent = hostplant;
        hostplantSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateHostplants();
    document.getElementById('butterfly').addEventListener('change', updateHostplants);
});