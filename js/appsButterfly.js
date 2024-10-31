// Example data
const butterflyCommonJay = {
    knownAs: "Doson, Dozon",
    scientificName: "Graphium Dozon",
    genus: "Graphium",
    bodyLength: "35 cm",
    bodyWidth: "0.5 cm",
    wingStand: "45 cm",
    wingSpan: "60 cm",
    maleColors: "Blue Spotted, Black",
    femaleColors: "Blue Spotted, Black",
    hostPlants: "Avocado Tree,Soursop, Sugar Apple, Amuyon,Indian Tree",
};
// Populate the HTML with the data
    document.getElementById('knownAs').textContent = butterflyCommonJay.knownAs;
    document.getElementById('scientificName').innerHTML = `<i>${butterflyCommonJay.scientificName}</i>`;
    document.getElementById('genus').textContent = butterflyCommonJay.genus;
    document.getElementById('bodyLength').textContent = butterflyCommonJay.bodyLength;
    document.getElementById('bodyWidth').textContent = butterflyCommonJay.bodyWidth;
    document.getElementById('wingStand').textContent = butterflyCommonJay.wingStand;
    document.getElementById('wingSpan').textContent = butterflyCommonJay.wingSpan;
    document.getElementById('maleColors').textContent = butterflyCommonJay.maleColors;
    document.getElementById('femaleColors').textContent = butterflyCommonJay.femaleColors;
    document.getElementById('hostPlants').textContent = butterflyCommonJay.hostPlants;

const butterflyCommonLime={
    bodyLength: "35 cm",
    bodyWidth: "0.5 cm",
    wingStand: "45 cm",
    wingSpan: "60 cm",
    maleColors: "Black Spotted, Yellow",
    femaleColors: "Black Spotted, Yellow",
    hostPlants: "Calamondin, Lemoncito, Pomelo, ",
};
// Populate the HTML with the data
    document.getElementById('knownAs').textContent = butterflyCommonLime.knownAs;
    document.getElementById('scientificName').innerHTML = `<i>${butterflyCommonLime.scientificName}</i>`;
    document.getElementById('genus').textContent = butterflyCommonLime.genus;
    document.getElementById('bodyLength').textContent = butterflyCommonLime.bodyLength;
    document.getElementById('bodyWidth').textContent = butterflyCommonLime.bodyWidth;
    document.getElementById('wingStand').textContent = butterflyCommonLime.wingStand;
    document.getElementById('wingSpan').textContent = butterflyCommonLime.wingSpan;
    document.getElementById('maleColors').textContent = butterflyCommonLime.maleColors;
    document.getElementById('femaleColors').textContent = butterflyCommonLime.femaleColors;
    document.getElementById('hostPlants').textContent = butterflyCommonLime.hostPlants;