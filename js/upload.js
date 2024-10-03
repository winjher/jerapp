 function processImage() {
            // const predOutput = [
            //     'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime',
            //     'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail',
            //     'Butterfly-Golden Birdwing', 'Butterfly-Gray Glassy Tiger', 'Butterfly-Great Eggfly',
            //     'Butterfly-Great Yellow Mormon', 'Butterfly-Paper Kite', 'Butterfly-Plain Tiger',
            //     'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Pink Rose',
            //     'Butterfly-Tailed Jay', 'Moth-Giant Silk', 'Moth-Atlas'
            // ];
            const predLabel = [
                { commonName: 'Butterfly-Batwing', scientificName: 'Parthenos sylvia', discoveredBy: 'Cramer', year: '1775', family: 'Nymphalidae', larvalHostPlant: 'Adenia', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Clippers', scientificName: 'Parthenos sylvia', discoveredBy: 'Cramer', year: '1775', family: 'Nymphalidae', larvalHostPlant: 'Adenia', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Common Jay', scientificName: 'Graphium doson', discoveredBy: 'C. & R. Felder', year: '1864', family: 'Papilionidae', larvalHostPlant: 'Annona',lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Common Lime', scientificName: 'Papilio demoleus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Common Mime', scientificName: 'Papilio demoleus', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Common Mormon', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Emerald Swallow Tail', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Giant Silk Moth', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Golden Birdwing', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Gray Glassy Tiger', scientificName: 'Danaus chrysippus', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Great Eggfly', scientificName: 'Hypolimnas bolina philippensis', discoveredBy: 'Butler', year: '1874', family: 'Nymphalidae Nymphalinae Nymphaliini', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Great Yellow Mormon', scientificName: 'Graphium doson', discoveredBy: 'C. & R. Felder', year: '1864', family: 'Papilionidae', larvalHostPlant: 'Annona',lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Paper Kite', scientificName: 'Danaus chrysippus', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Plain Tiger', scientificName: 'Danaus chrysippus', discoveredBy: 'Linnaeus', year: '1758', family: 'Nymphalidae Danainae Danaini', larvalHostPlant: 'Cornflower', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Pink Rose', scientificName: '𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilioninae Leptocircini', larvalHostPlant: 'Soursop,SUgar Apple, Amuyon', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-RedHelen', scientificName: 'Menelaides helenus hystaspes', discoveredBy: 'C.& R. Felder', year: '1862', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Scarlet Mormon', scientificName: 'Papilio polytes', discoveredBy: 'Eschscholtz', year: '1821', family: 'Papilionidae; Papilioninae; Papilionini', larvalHostPlant: 'Calamondin,Citrus Lemoncito', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Tailed Jay', scientificName: '𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯', discoveredBy: 'Linnaeus', year: '1758', family: 'Papilionidae Papilioninae Leptocircini', larvalHostPlant: 'Soursop,SUgar Apple, Amuyon', lepidoptera:'Butterfly' },
                { commonName: 'Butterfly-Three-Spot Grass Yellow', scientificName: 'Eurema blanda visellia', discoveredBy: 'Fruhstorfer', year: '1910', family: 'Pieridae; Coliadinae', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Butterfly' },
                { commonName: 'Moth-Atlas', scientificName: 'Attacus Atlas', discoveredBy: 'Linnaeus', year: '1767', family: 'Saturniinae', larvalHostPlant: 'Sugar Apple, Soursop', lepidoptera:'Moth'},
                { commonName: 'Skipper-Grass Skipper', scientificName: 'Prusiana prusias matinus', discoveredBy: 'Fruhstorfer', year: '1911', family: 'Hesperiidae; Hesperiinae', larvalHostPlant: 'Sweet Potato, Water Spinach', lepidoptera:'Skipper' },

                // Add more species here...
            ];

            const lifecycleStages = [
                { stage: 'Egg hatching', duration: '3-5 days' },
                { stage: 'Molting', duration: '24-36 hrs' },
                { stage: 'Larva instar', duration: '10-14 days' },
                { stage: 'Pre-pupa hanged', duration: '12-24 hrs' },
                { stage: 'Pupating', duration: '3-10 minutes to 1 hour' },
                { stage: 'Chrysalis', duration: '10-12 days' },
                { stage: 'Eclosion', duration: '1 to 5 minutes' },
                { stage: 'Drying wings', duration: '2-4 hrs' },
                { stage: 'Adult', duration: '2-6 weeks' }
            ];
            const activity=['Activity Molting', 'Activity Munching', 'Activity Nectaring', 'Activity Pudding', 'Activity Pupating'];
            const defects=['Defects Broken Wings Atlas', 'Defects Crumpled Wings Butterfly-Common Lime', 'Defects Crumpled Wings Butterfly-Tailed Jay', 'Defects Deformed Pupae-Common Lime', 'Defects Overbend Pupae-Common Lime', 'Defects Overbend Pupae-Common Mormon', 'Defects Pupae-Golden Birdwing', 'Defects Stretchedmark-Common Mormon'];
            const larvae=['Larvae Common Jay', 'Larvae Instar-Common Lime', 'Larvae Instar-Golden Birdwing', 'Larvae-Atlas', 'Larvae-Clippers', 'Larvae-Common Jay', 'Larvae-Common Lime', 'Larvae-Eggs-Golden Birdwing', 'Larvae-Giant Silk Moth', 'Larvae-Golden Birdwing', 'Larvae-Paper Kite', 'Larvae-Pink Rose', 'Larvae-Plain Tiger', 'Larvae-Red Lacewing', 'Larvae-Tailed Jay'];
            const eggs =['Eggs-Common Jay', 'Eggs-Common Lime', 'Eggs-Golden Birdwing', 'Eggs-Pink Rose', 'Eggs-Plain Tiger', 'Eggs-Tailed Jay', 'Egs-Red Lacewing', 'Healthy Larvae-Golden Birdwing', 'Healthy Pupae-Common Lime', 'Healthy Pupae-Golden Birdwing', 'Moth-Atlas', 'Moth-Giant Silk', 'Old Pupae-Plain Tiger', 'Ovipositing-Tailed Jay', 'Predators Ants-Golden Birdwing', 'Prepupae Larvae-Golden Birdwing', 'Pupae-Common Jay', 'Pupae-Common Lime', 'Pupae-Golden Birdwing', 'Pupae-Golding Brdwing', 'Pupae-Paper Kite', 'Pupae-Pink Rose', 'Pupae-Plain Tiger', 'Pupae-Tailed Jay', 'Skipper-Club Silverline'];
            const diseases=['Disease Larvae Atlas','Disease Larvae Golden Birdwing','Disease Larvae Plain Tiger'];
            const diseasesType=['Disease Type','Disease Type Tachinids Fly', '']
            const predLep = ['Butterfly','Moth','Skipper'];
            const fname=['ryan','christian','malik','james','she', 'Jao','ming','allan'];
            const spotlocation= ['Manila Philippines','Bago Negros Occ.','Baguio City'];
            
            const imgInput = document.getElementById('imageUpload');

            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            const fileInput = document.getElementById('imageUpload');
            const file = fileInput.files[0];

            if (imgInput.files && imgInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.style.width = '200px';
                    imgElement.style.height = '200px';
                    outputDiv.appendChild(imgElement);
                };
                reader.readAsDataURL(imgInput.files[0]);
            }
 
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                   
                    const tableBody = document.getElementById('imageTableBody');
                    const newRow = document.createElement('tr');
                    const randomIndex = Math.floor(Math.random() *predLabel.length);
                    const prediction =predLabel[randomIndex];
                    const uploaderName = fname[Math.floor(Math.random() * fname.length)]; // Replace with dynamic data if needed
                    const uploadReferenceID = Date.now().toString();
                    //const lifeStages= lifecycleStages[Math.floor(Math.random() * lifecycleStages.length[0])];
                    //const commonName = predOutput[Math.floor(Math.random() * predOutput.length)]; // Replace with dynamic data if needed
                    
                    const percent = (Math.random() * 100).toFixed(2) + '%'; // Replace with dynamic data if needed
                    const uploadImage = file.name;
                    const size = file.size;
                    const mimeType = file.type;
                    const lastModified = file.lastModified;
                    //const content = predLep[Math.floor(Math.random() * predLep.length)]; // Replace with dynamic data if needed
               
                    const lepType = predLabel[Math.floor(Math.random() * predLabel.length)]; // Replace with dynamic data if needed
                    const date = new Date().toLocaleDateString();
                    const location = spotlocation[Math.floor(Math.random() * spotlocation.length)];

                     // Create the link based on the commonName
                    const link = prediction.commonName.replace(/ /g, '') + '.html';
                    newRow.innerHTML = `
                        <td>${uploaderName}</td>
                        <td>${uploadReferenceID}</td>
                        <td><a href="${link}" target="_blank">${prediction.commonName}</a></td>           
                        <td>${percent}</td>
                        <td><a href="${uploadImage}" download>Download Image</a></td>
                        <td>${size}</td>
                        <td>${mimeType}</td>
                        <td>${lastModified}</td>
                        <td>${prediction.lepidoptera}</td>
                        <td>${date}</td>
                        <td>${location}</td>
                        <td><button onclick="deleteRow(this, ${uploadReferenceID})">Delete</button></td>
                    `;

                    tableBody.appendChild(newRow);
                };
                reader.readAsDataURL(file);
            }
        }
        function deleteRow(button, id) {
            // Remove the row from the table
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);

            // Call the server to delete the row from the database
            fetch(`/deleteButterflyImage/${id}`, {
                method: 'DELETE'
            }).then(response => {
                if (response.ok) {
                    console.log('Row deleted successfully');
                } else {
                    console.error('Failed to delete row');
                }
            });
        }
        document.getElementById('uploadForm').addEventListener('submit', uploadImage);


        function myReset() {
            document.getElementById("imageUpload").reset();
        }
        function filterTable() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("butterflyTable");
            tr = table.getElementsByTagName("tr");


            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

   
       