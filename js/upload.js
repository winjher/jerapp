 function processImage() {
            const predOutput = [
                'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime',
                'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail',
                'Butterfly-Golden Birdwing', 'Butterfly-Gray Glassy Tiger', 'Butterfly-Great Eggfly',
                'Butterfly-Great Yellow Mormon', 'Butterfly-Paper Kite', 'Butterfly-Plain Tiger',
                'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Pink Rose',
                'Butterfly-Tailed Jay', 'Moth-Giant Silk', 'Moth-Atlas'
            ];
            const predLep = ['Butterfly','Moth','Skipper']

            const imgInput = document.getElementById('imageUpload');
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';

            if (imgInput.files && imgInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.style.width = '250px';
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

                    const uploaderName = 'Jher'; // Replace with dynamic data if needed
                    const uploadReferenceID = Date.now().toString();

                    const commonName = predOutput[Math.floor(Math.random() * predOutput.length)]; // Replace with dynamic data if needed
                    const percent = (Math.random() * 100).toFixed(2) + '%'; // Replace with dynamic data if needed
                    const uploadImage = file.name;
                    const size = file.size;
                    const mimeType = file.type;
                    const lastModified = file.lastModified;
                    const content = predLep[Math.floor(Math.random() * predLep.length)]; // Replace with dynamic data if needed
                    const date = new Date().toLocaleDateString();

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