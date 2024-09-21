 function processImage() {
            // const predOutput = [
            //     'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime',
            //     'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail',
            //     'Butterfly-Golden Birdwing', 'Butterfly-Gray Glassy Tiger', 'Butterfly-Great Eggfly',
            //     'Butterfly-Great Yellow Mormon', 'Butterfly-Paper Kite', 'Butterfly-Plain Tiger',
            //     'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Pink Rose',
            //     'Butterfly-Tailed Jay', 'Moth-Giant Silk', 'Moth-Atlas'
            // ];
            const predOutput=['Activity Molting', 'Activity Munching', 'Activity Nectaring', 'Activity Pudding', 'Activity Pupating', 'Butterfly-Batwing', 'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime', 'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail', 'Butterfly-Giant Silk Moth', 'Butterfly-Golden Birdwing', 'Butterfly-Great Eggfly', 'Butterfly-Great Yellow Mormon', 'Butterfly-Grey Glassy Tiger', 'Butterfly-Paper Kite', 'Butterfly-Pink Rose', 'Butterfly-Plain Tiger', 'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Tailed Jay', 'Defects Broken Wings Atlas', 'Defects Crumpled Wings Butterfly-Common Lime', 'Defects Crumpled Wings Butterfly-Tailed Jay', 'Defects Deformed Pupae-Common Lime', 'Defects Overbend Pupae-Common Lime', 'Defects Overbend Pupae-Common Mormon', 'Defects Pupae-Golden Birdwing', 'Defects Stretchedmark-Common Mormon', 'Disease Larvae Golden Birdwing', 'Disease Larvae Tachinids fly', 'Disease Larvae-Plain Tiger', 'Eggs-Common Jay', 'Eggs-Common Lime', 'Eggs-Golden Birdwing', 'Eggs-Pink Rose', 'Eggs-Plain Tiger', 'Eggs-Tailed Jay', 'Egs-Red Lacewing', 'Healthy Larvae-Golden Birdwing', 'Healthy Pupae-Common Lime', 'Healthy Pupae-Golden Birdwing', 'Larvae Common Jay', 'Larvae Instar-Common Lime', 'Larvae Instar-Golden Birdwing', 'Larvae-Atlas', 'Larvae-Clippers', 'Larvae-Common Jay', 'Larvae-Common Lime', 'Larvae-Eggs-Golden Birdwing', 'Larvae-Giant Silk Moth', 'Larvae-Golden Birdwing', 'Larvae-Paper Kite', 'Larvae-Pink Rose', 'Larvae-Plain Tiger', 'Larvae-Red Lacewing', 'Larvae-Tailed Jay', 'Moth-Atlas', 'Moth-Giant Silk', 'New folder', 'Old Pupae-Plain Tiger', 'Ovipositing-Tailed Jay', 'Predators Ants-Golden Birdwing', 'Prepupae Larvae-Golden Birdwing', 'Pupae-Common Jay', 'Pupae-Common Lime', 'Pupae-Golden Birdwing', 'Pupae-Golding Brdwing', 'Pupae-Paper Kite', 'Pupae-Pink Rose', 'Pupae-Plain Tiger', 'Pupae-Tailed Jay', 'Skipper-Club Silverline'];
            const predLep = ['Butterfly','Moth','Skipper']
            const fname=['ryan','christian','malik','james','she', 'Jao','ming'] 
            const spotlocation= ['Manila Philippines','Bago Negros Occ.','Baguio City']
            const imgInput = document.getElementById('imageUpload');

            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';

            if (imgInput.files && imgInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.style.width = '50px';
                    outputDiv.appendChild(imgElement);

                    // const itm = Math.floor(Math.random() * predOutput.length);
                    // const percent = Math.floor(Math.random() * 100);
                    // const today = new Date();
                    // const reference = Math.floor(Math.random() * 1000000000000000);

                    // const prediction = predOutput[itm];
                    // if (!predOutput.includes(prediction)) {
                    //     outputDiv.innerHTML += `<p>Prediction: Unknown</p>`;
                    // } else {
                    //     outputDiv.innerHTML += `<p>Prediction: ${prediction} (${percent}%)</p>`;
                    // }
                    // outputDiv.innerHTML += `<p>Upload Reference ID: ${reference}</p>`;
                    // outputDiv.innerHTML += `<p>Date: ${today.toDateString()}</p>`;
                };
                reader.readAsDataURL(imgInput.files[0]);
            }
        // }

        // function uploadImage() {

            const fileInput = document.getElementById('imageUpload');
            const file = fileInput.files[0];
            

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const tableBody = document.getElementById('imageTableBody');
                    const newRow = document.createElement('tr');

                    const uploaderName = fname[Math.floor(Math.random() * fname.length)]; // Replace with dynamic data if needed
                    const uploadReferenceID = Date.now().toString();
                    const commonName = predOutput[Math.floor(Math.random() * predOutput.length)]; // Replace with dynamic data if needed
                    const percent = (Math.random() * 100).toFixed(2) + '%'; // Replace with dynamic data if needed
                    const uploadImage = file.name;
                    const size = file.size;
                    const mimeType = file.type;
                    const lastModified = file.lastModified;
                    const content = predLep[Math.floor(Math.random() * predLep.length)]; // Replace with dynamic data if needed
                    const date = new Date().toLocaleDateString();
                    const location = spotlocation[Math.floor(Math.random() * spotlocation.length)];

                    newRow.innerHTML = `
                        <td>${uploaderName}</td>
                        <td>${uploadReferenceID}</td>
                        <td>${commonName}</td>
                        <td>${percent}</td>
                        <td>${uploadImage}</td>
                        <td>${size}</td>
                        <td>${mimeType}</td>
                        <td>${lastModified}</td>
                        <td>${content}</td>
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