function processLabel() {
    const predInfo = [
        { commonName: 'Butterfly-Batwing', scientificName: 'Atrophaneura semperi', discoveredBy: 'Cramer', year: '1775', family: 'Nymphalidae', larvalHostPlant: 'Dutchman pipe, Indian birtworth', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Clippers', scientificName: 'Parthenos sylvia', discoveredBy: 'Cramer', year: '1775', family: 'Nymphalidae', larvalHostPlant: 'Wild cucumber', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Common Jay', scientificName: 'Graphium doson', discoveredBy: 'C. & R. Felder', year: '1864', family: 'Papilionidae', larvalHostPlant: 'Avocado tree, Soursop, Sugar apple, Amuyon, Indian tree', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Common Lime', scientificName: 'Papilio demoleus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Limeberry, Calamondin,Pomelo,Sweet orange, Calamansi Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Common Mime', scientificName: 'Chilasa clytia', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Clover cinnamon, Wild cinnamon', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Common Mormon', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Pomelo, Calamansi, Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Emerald SwallowTail', scientificName: 'Papilio palinurus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilionidae Lepto Circini', larvalHostPlant: 'Curry leaf, Pink Lime Berry Tree', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Golden Birdwing', scientificName: 'Troides rhadamantus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilionidae Lepto Circini', larvalHostPlant: 'Dutchman pipe, Indian Birthwort', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Gray Glassy Tiger', scientificName: 'Parantica aglea', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilionidae Lepto Circini', larvalHostPlant: 'Soursop,SUgar Apple, Amuyon', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Great Eggfly', scientificName: 'Hypolimnas bolina philippensis', discoveredBy: 'Butler', year: '1874', family: 'Nymphalidae Nymphalinae Nymphaliini', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Great Yellow Mormon', scientificName: 'Papilio lowi', discoveredBy: 'Butler', year: '1874', family: 'Nymphalidae Nymphalinae Nymphaliini', larvalHostPlant: 'Limeberry, Calamondin,Pomelo,Sweet orange, Calamansi Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Paper Kite', scientificName: 'Idea Leucono', discoveredBy: 'Butler', year: '1874', family: 'Nymphalidae Nymphalinae Nymphaliini', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Pink Rose', scientificName: 'Pachliopta kutzebuea', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Plain Tiger', scientificName: 'Danaus chrysippus', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Red Lacewing', scientificName: 'Cethosia biblis', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Wild Bush Passion Fruit,Citrus Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Scarlet Mormon', scientificName: 'Papilio romansovia', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Limeberry, Calamondin,Pomelo,Sweet orange, Calamansi Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Tailed Jay', scientificName: '𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilionidae Lepto Circini', larvalHostPlant: 'Soursop,SUgar Apple, Amuyon', lepidoptera: 'Butterfly' },
        { commonName: 'Butterfly-Three-Spot Grass Yellow', scientificName: 'Eurema blanda visellia', discoveredBy: 'Fruhstorfer', year: '1910', family: 'Pieridae; Coliadinae', larvalHostPlant: 'Wild Peanut', lepidoptera: 'Butterfly' },
        { commonName: 'Skipper-Grass Skipper', scientificName: 'Prusiana prusias martinus', discoveredBy: 'Fruhstorfer', year: '1911', family: 'Hesperiidae; Hesperiinae', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera: 'Skipper' },
        { commonName: 'Butterfly-Helenus Hystaspe', scientificName: 'Menelaides helenus hystaspes', discoveredBy: 'C.& R. Felder', year: '1862', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera: 'Butterfly' },
        { commonName: 'Moth-Atlas', scientificName: 'Attacus Atlas', discoveredBy: 'Linnaeus', year: '1767', family: 'Saturniidae', larvalHostPlant: 'Sugar Apple, Soursop, Gimelina', lepidoptera: 'Moth' }
// Add more species here...
        ];

      const imgInput = document.getElementById('imageUpload');
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';

      if (imgInput.files && imgInput.files[0]) {
          const reader = new FileReader();
          reader.onload = function (e) {
              const imgElement = document.createElement('img');
              imgElement.src = e.target.result;
              imgElement.style.width = '224px';
              imgElement.style.height = '224px';
              outputDiv.appendChild(imgElement);

              // Simulate a prediction
              const randomIndex = Math.floor(Math.random() * predInfo.length);
              const prediction = predInfo[randomIndex];

              // Display prediction details
              const details = `
                  <p>Common Name: ${prediction.commonName}</p>
                  <p>Scientific Name: ${prediction.scientificName}</p>
                  <p>Discovered By: ${prediction.discoveredBy}</p>
                  <p>Year: ${prediction.year}</p>
                  <p>Family: ${prediction.family}</p>
                  <p>Larval Host Plant: ${prediction.larvalHostPlant}</p>
              `;
              outputDiv.innerHTML += details;
          };
          reader.readAsDataURL(imgInput.files[0]);
      }
  }

  document.getElementById('imageUpload').addEventListener('change', processLabel);

  function checkButterfly(species) {
    switch (species) {
      case 'Butterfly-Batwing':
        // Code for Butterfly-Batwing
        const firstElement = predInfo[0];
        console.log(firstElement);

        break;
      case 'Butterfly-Clippers':
        // Code for Butterfly-Clippers
        break;
      case 'Butterfly-Common Jay':
        // Code for Butterfly-Common Jay
        break;
      case 'Butterfly-Common Lime':
        // Code for Butterfly-Common Lime
        break;
      case 'Butterfly-Common Mime':
        // Code for Butterfly-Common Mime
        break;
      case 'Butterfly-Common Mormon':
        // Code for Butterfly-Common Mormon
        break;
      case 'Butterfly-Emerald Swallowtail':
        // Code for Butterfly-Emerald Swallowtail
        break;
      case 'Butterfly-Golden Birdwing':
        // Code for Butterfly-Golden Birdwing
        break;
      case 'Butterfly-Gray Glassy Tiger':
        // Code for Butterfly-Gray Glassy Tiger
        break;
      case 'Butterfly-Great Eggfly':
        // Code for Butterfly-Great Eggfly
        break;
      case 'Butterfly-Great Yellow Mormon':
        // Code for Butterfly-Great Yellow Mormon
        break;
      case 'Butterfly-Paper Kite':
        // Code for Butterfly-Paper Kite
        break;
      case 'Butterfly-Plain Tiger':
        // Code for Butterfly-Plain Tiger
        break;
      case 'Butterfly-Red Lacewing':
        // Code for Butterfly-Red Lacewing
        break;
      case 'Butterfly-Scarlet Mormon':
        // Code for Butterfly-Scarlet Mormon
        break;
      case 'Butterfly-Pink Rose':
        // Code for Butterfly-Pink Rose
        break;
      case 'Butterfly-Tailed Jay':
        // Code for Butterfly-Tailed Jay
        break;
      case 'Moth-Giant Silk':
        // Code for Moth-Giant Silk
        break;
      case 'Moth-Atlas':
        // Code for Moth-Atlas
        break;
      default:
        // Code for unknown species
    }
  }
  