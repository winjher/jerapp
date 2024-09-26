function processLabel() {
      const predInfo = [
          { commonName: 'Butterfly-Clippers', scientificName: 'Parthenos sylvia', discoveredBy: 'Cramer',year:'1775', family: 'Nymphalidae', larvalHostPlant: 'Adenia'},
          { commonName: 'Butterfly-Common Jay', scientificName: 'Graphium doson', discoveredBy: 'C. & R. Felder',year:'1864', family: 'Papilionidae', larvalHostPlant: 'Annona'},
          { commonName: 'Butterfly-PLAIN TIGER or AFRICAN MONARCH', scientificName:'Danaus chrysippus', discoveredBy:'Linnaeus',year:'1758', family: 'Nymphalidae Danainae Danaini',larvalHostPlant:'Cornflower'},
          { commonName: 'COMMON MORMON',  scientificName:'Papilio polytes', discoveredBy:'Eschscholtz',year:'1821',	family:'Papilionidae; Papilioninae; Papilionini',larvalHostPlant: 'Calamondin,Citrus Lemoncito,'},
          { commonName: 'TAILED JAY',	scientificName:'𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯', discoveredBy:'Linnaeus',year:'1758',	family:'Papilionidae Papilioninae Leptocircini',larvalHostPlant: 'Soursop,SUgar Apple, Amuyon'},
          { commonName: 'GREAT EGGFLY', scientificName:'Hypolimnas bolina philippensis',  discoveredBy:'Butler',year:'1874', family:'Nymphalidae Nymphalinae Nymphaliini',larvalHostPlant: 'Sweet Potato, Water Spinach'},
          { commonName: 'COMMON LIME',	scientificName:'Papilio demoleus', 	discoveredBy:'Linnaeus',year:'1758', family:'Papilionidae; Papilioninae; Papilionini',larvalHostPlant: 'Sweet Potato, Water Spinach'},
          { commonName: 'THREE-SPOT GRASS YELLOW',	scientificName:'Eurema blanda visellia', discoveredBy:'Fruhstorfer',year:'1910', family:'Pieridae; Coliadinae',larvalHostPlant: 'Sweet Potato, Water Spinach'},
          { commonName: 'GRASS SKIPPER', scientificName:'Prusiana prusias matinus', discoveredBy:'Fruhstorfer',year:'1911', family:'Hesperiidae; Hesperiinae',larvalHostPlant: 'Sweet Potato, Water Spinach'},
          { commonName: 'RED HELEN', scientificName:'Menelaides helenus hystaspes', discoveredBy:'C.& R. Felder',year:'1862',	family:'Papilionidae; Papilioninae; Papilionini',larvalHostPlant: 'Sweet Potato, Water Spinach'},
          { commonName: 'ATLAS MOTH', scientificName:'Attacus Atlas',	discoveredBy:'Linnaeus',year:'1767', family:'Saturniinae',larvalHostPlant: 'Sweet Potato, Water Spinach'},

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
              imgElement.style.width = '300px';
              imgElement.style.height = '300px';
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
