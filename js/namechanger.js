const pali = { localName: 'Pali', commonName: 'Emerald Swallowtail', scientificName: 'Papilio palinurus' };
const bolina = { localName: 'Bolina', commonName: 'Great Eggfly', scientificName: 'Hipolymnas bolina' };
const biblis = { localName: 'Biblis', commonName: 'Red Lacewing', scientificName: 'Cethosia Biblis' };
const redhelen = { localName: 'Helenus', commonName: 'Red Helenus', scientificName: 'Helenus Hystaspe' };

function changeNames(nameType, data) {
    let targetLabel = document.getElementById("names");
    targetLabel.textContent = `'${data[nameType]}'`;
}

document.addEventListener('DOMContentLoaded', () => {
 
    document.getElementById("paliLocal").addEventListener("click", () => changeNames('localName', pali));
    document.getElementById("paliCommon").addEventListener("click", () => changeNames('commonName', pali));
    document.getElementById("paliScientific").addEventListener("click", () => changeNames('scientificName', pali));
  
    document.getElementById("redhelenLocal").addEventListener("click", () => changeNames('localName', redhelen));
    document.getElementById("redhelenCommon").addEventListener("click", () => changeNames('commonName',redhelen));
    document.getElementById("redhelenScientific").addEventListener("click", () => changeNames('scientificName',redhelen));

    document.getElementById("biblisLocal").addEventListener("click", () => changeNames('localName', biblis));
    document.getElementById("biblisCommon").addEventListener("click", () => changeNames('commonName', biblis));
    document.getElementById("biblisScientific").addEventListener("click", () => changeNames('scientificName', biblis));

    document.getElementById("bolinaLocal").addEventListener("click", () => changeNames('localName', bolina));
    document.getElementById("bolinaCommon").addEventListener("click", () => changeNames('commonName', bolina));
    document.getElementById("bolinaScientific").addEventListener("click", () => changeNames('scientificName', bolina));
});


