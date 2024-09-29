function processLabel() {
      const predInfo = [
            { commonName: 'Butterfly-Clippers', scientificName: 'Parthenos sylvia', discoveredBy: 'Cramer', year: '1775', family: 'Nymphalidae', larvalHostPlant: 'Adenia', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Common Jay', scientificName: 'Graphium doson', discoveredBy: 'C. & R. Felder', year: '1864', family: 'Papilionidae', larvalHostPlant: 'Annona',lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Plain Tiger', scientificName: 'Danaus chrysippus', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Common Mormon', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Tailed Jay', scientificName: '𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilioninae Leptocircini', larvalHostPlant: 'Soursop,SUgar Apple, Amuyon', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Great Eggfly', scientificName: 'Hypolimnas bolina philippensis', discoveredBy: 'Butler', year: '1874', family: 'Nymphalidae Nymphalinae Nymphaliini', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Common Lime', scientificName: 'Papilio demoleus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
            { commonName: 'Butterfly-Three-Spot Grass Yellow', scientificName: 'Eurema blanda visellia', discoveredBy: 'Fruhstorfer', year: '1910', family: 'Pieridae; Coliadinae', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Butterfly' },
            { commonName: 'Skipper-Grass Skipper', scientificName: 'Prusiana prusias matinus', discoveredBy: 'Fruhstorfer', year: '1911', family: 'Hesperiidae; Hesperiinae', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Skipper' },
            { commonName: 'Butterfly-Helenus Hystaspe', scientificName: 'Menelaides helenus hystaspes', discoveredBy: 'C.& R. Felder', year: '1862', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
            { commonName: 'Moth-Atlas', scientificName: 'Attacus Atlas', discoveredBy: 'Linnaeus', year: '1767', family: 'Saturniinae', larvalHostPlant: 'Sugar Apple, Soursop', lepidoptera:'Moth'},

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
