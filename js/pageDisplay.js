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
    {
      LocalName: "Semperi",
      commonName: "Butterfly-Batwing",
      scientificName: "Parthenos sylvia",
      discoveredBy: "Cramer",
      year: "1775",
      family: "Nymphalidae",
      larvalHostPlant: "Adenia",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Biblis",
      commonName: "Butterfly-Clippers",
      scientificName: "Parthenos sylvia",
      discoveredBy: "Cramer",
      year: "1775",
      family: "Nymphalidae",
      larvalHostPlant: "Adenia",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Doson",
      commonName: "Butterfly-Common Jay",
      scientificName: "Graphium doson",
      discoveredBy: "C. & R. Felder",
      year: "1864",
      family: "Papilionidae",
      larvalHostPlant: "Annona",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Demolyos",
      commonName: "Butterfly-Common Lime",
      scientificName: "Papilio demoleus",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Palipatos",
      commonName: "Butterfly-Common Mime",
      scientificName: "Papilio demoleus",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Polytes",
      commonName: "Butterfly-Common Mormon",
      scientificName: "Papilio polytes",
      discoveredBy: "Eschscholtz",
      year: "1821",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Pali",
      commonName: "Butterfly-Emerald Swallow Tail",
      scientificName: "Papilio polytes",
      discoveredBy: "Eschscholtz",
      year: "1821",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Cajavong Dilaw",
      commonName: "Butterfly-Golden Birdwing",
      scientificName: "Papilio polytes",
      discoveredBy: "Eschscholtz",
      year: "1821",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Tigre",
      commonName: "Butterfly-Gray Glassy Tiger",
      scientificName: "Danaus chrysippus",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Nymphalidae Danainae Danaini",
      larvalHostPlant: "Cornflower",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Bolina",
      commonName: "Butterfly-Great Eggfly",
      scientificName: "Hypolimnas bolina philippensis",
      discoveredBy: "Butler",
      year: "1874",
      family: "Nymphalidae Nymphalinae Nymphaliini",
      larvalHostPlant: "Sweet Potato, Water Spinach",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Lowi",
      commonName: "Butterfly-Great Yellow Mormon",
      scientificName: "Graphium doson",
      discoveredBy: "C. & R. Felder",
      year: "1864",
      family: "Papilionidae",
      larvalHostPlant: "Annona",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Leucono",
      commonName: "Butterfly-Paper Kite",
      scientificName: "Danaus chrysippus",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Nymphalidae Danainae Danaini",
      larvalHostPlant: "Cornflower",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Ivory",
      commonName: "Butterfly-Plain Tiger",
      scientificName: "Danaus chrysippus",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Nymphalidae Danainae Danaini",
      larvalHostPlant: "Cornflower",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Kotsebuya",
      commonName: "Butterfly-Pink Rose",
      scientificName: "𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Papilionidae Papilioninae Leptocircini",
      larvalHostPlant: "Soursop,SUgar Apple, Amuyon",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Helenus",
      commonName: "Butterfly-Red Helen",
      scientificName: "Menelaides helenus hystaspes",
      discoveredBy: "C.& R. Felder",
      year: "1862",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Roman Pabo",
      commonName: "Butterfly-Scarlet Mormon",
      scientificName: "Papilio polytes",
      discoveredBy: "Eschscholtz",
      year: "1821",
      family: "Papilionidae; Papilioninae; Papilionini",
      larvalHostPlant: "Calamondin,Citrus Lemoncito",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Kiwig/Aga",
      commonName: "Butterfly-Tailed Jay",
      scientificName: "𝘎𝘳𝘢𝘱𝘩𝘪𝘶𝘮 𝘢𝘨𝘢𝘮𝘦𝘮𝘯𝘰𝘯",
      discoveredBy: "Linnaeus",
      year: "1758",
      family: "Papilionidae Papilioninae Leptocircini",
      larvalHostPlant: "Soursop,SUgar Apple, Amuyon",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Dilaw",
      commonName: "Butterfly-Three-Spot Grass Yellow",
      scientificName: "Eurema blanda visellia",
      discoveredBy: "Fruhstorfer",
      year: "1910",
      family: "Pieridae; Coliadinae",
      larvalHostPlant: "Sweet Potato, Water Spinach",
      lepidoptera: "Butterfly",
    },
    {
      LocalName: "Mariposa",
      commonName: "Moth-Atlas",
      scientificName: "Attacus Atlas",
      discoveredBy: "Linnaeus",
      year: "1767",
      family: "Saturniinae",
      larvalHostPlant: "Sugar Apple, Soursop",
      lepidoptera: "Moth",
    },
    {
      LocalName: "Samia",
      commonName: "Moth-Giant Silk",
      scientificName: "Samia Luzonica",
      discoveredBy: "Eschscholtz",
      year: "1821",
      family: "Samia",
      larvalHostPlant: "Gemilina, Curry Leaf",
      lepidoptera: "Moth",
    },
    {
      LocalName: "Skipper",
      commonName: "Skipper-Grass Skipper",
      scientificName: "Prusiana prusias matinus",
      discoveredBy: "Fruhstorfer",
      year: "1911",
      family: "Hesperiidae; Hesperiinae",
      larvalHostPlant: "Sweet Peanut",
      lepidoptera: "Skipper",
    },

    // Add more species here...
  ];

  const lifecycleStages = [
    { stage: "Egg hatching", duration: "3-5 days" },
    { stage: "Molting", duration: "24-36 hrs" },
    { stage: "Larva instar", duration: "10-14 days" },
    { stage: "Pre-pupa hanged", duration: "12-24 hrs" },
    { stage: "Pupating", duration: "3-10 minutes to 1 hour" },
    { stage: "Chrysalis", duration: "10-12 days" },
    { stage: "Eclosion", duration: "1 to 5 minutes" },
    { stage: "Drying wings", duration: "2-4 hrs" },
    { stage: "Adult", duration: "2-6 weeks" },
  ];
  const activity = [
    "Activity Molting",
    "Activity Munching",
    "Activity Nectaring",
    "Activity Pudding",
    "Activity Pupating",
  ];
  const defects = [
    "Defects Broken Wings Atlas",
    "Defects Crumpled Wings Butterfly-Common Lime",
    "Defects Crumpled Wings Butterfly-Tailed Jay",
    "Defects Deformed Pupae-Common Lime",
    "Defects Overbend Pupae-Common Lime",
    "Defects Overbend Pupae-Common Mormon",
    "Defects Pupae-Golden Birdwing",
    "Defects Stretchedmark-Common Mormon",
  ];
  const larvae = [
    "Larvae Common Jay",
    "Larvae Instar-Common Lime",
    "Larvae Instar-Golden Birdwing",
    "Larvae-Atlas",
    "Larvae-Clippers",
    "Larvae-Common Jay",
    "Larvae-Common Lime",
    "Larvae-Eggs-Golden Birdwing",
    "Larvae-Giant Silk Moth",
    "Larvae-Golden Birdwing",
    "Larvae-Paper Kite",
    "Larvae-Pink Rose",
    "Larvae-Plain Tiger",
    "Larvae-Red Lacewing",
    "Larvae-Tailed Jay",
  ];
  const eggs = [
    "Eggs-Common Jay",
    "Eggs-Common Lime",
    "Eggs-Golden Birdwing",
    "Eggs-Pink Rose",
    "Eggs-Plain Tiger",
    "Eggs-Tailed Jay",
    "Egs-Red Lacewing",
    "Healthy Larvae-Golden Birdwing",
    "Healthy Pupae-Common Lime",
    "Healthy Pupae-Golden Birdwing",
    "Moth-Atlas",
    "Moth-Giant Silk",
    "Old Pupae-Plain Tiger",
    "Ovipositing-Tailed Jay",
    "Predators Ants-Golden Birdwing",
    "Prepupae Larvae-Golden Birdwing",
    "Pupae-Common Jay",
    "Pupae-Common Lime",
    "Pupae-Golden Birdwing",
    "Pupae-Golding Brdwing",
    "Pupae-Paper Kite",
    "Pupae-Pink Rose",
    "Pupae-Plain Tiger",
    "Pupae-Tailed Jay",
    "Skipper-Club Silverline",
  ];
  const diseases = [
    "Disease Larvae Atlas",
    "Disease Larvae Golden Birdwing",
    "Disease Larvae Plain Tiger",
  ];
  const diseasesType = ["Disease Type", "Disease Type Tachinids Fly", ""];
  const predLep = ["Butterfly", "Moth", "Skipper"];
  const fname = [
    "ryan",
    "christian",
    "malik",
    "james",
    "she",
    "Jao",
    "ming",
    "allan",
  ];
  const spotlocation = [
    "Manila Philippines",
    "Bago Negros Occ.",
    "Baguio City",
  ];

  const imgInput = document.getElementById("imageUpload");

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  const fileInput = document.getElementById("imageUpload");
  const file = fileInput.files[0];

  if (imgInput.files && imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      imgElement.style.width = "200px";
      imgElement.style.height = "200px";
      outputDiv.appendChild(imgElement);

      alert(`Image uploaded successfully with ID: ${imgId}`);
    };
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    alert("Please select an image to upload.");
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgData = e.target.result;
      const imgId = new Date().getTime();
      const tableBody = document.getElementById("imageTableBody");
      const newRow = document.createElement("tr");
      const randomIndex = Math.floor(Math.random() * predLabel.length);
      const prediction = predLabel[randomIndex];
      const uploaderName = fname[Math.floor(Math.random() * fname.length)]; // Replace with dynamic data if needed
      const uploadReferenceID = Date.now().toString();
      //const lifeStages= lifecycleStages[Math.floor(Math.random() * lifecycleStages.length[0])];
      //const commonName = predOutput[Math.floor(Math.random() * predOutput.length)]; // Replace with dynamic data if needed
  
      const percent = (Math.random() * 100).toFixed(2) + "%"; // Replace with dynamic data if needed
      const uploadImage = file.name;
      const size = file.size;
      const mimeType = file.type;
      const lastModified = file.lastModified;
      //const content = predLep[Math.floor(Math.random() * predLep.length)]; // Replace with dynamic data if needed

      const lepType = predLabel[Math.floor(Math.random() * predLabel.length)]; // Replace with dynamic data if needed
      const date = new Date().toLocaleDateString();
      const location =
        spotlocation[Math.floor(Math.random() * spotlocation.length)];
      localStorage.setItem(imgId, imgData,uploaderName,prediction,uploadReferenceID,percent,uploadImage,size,mimeType,lastModified,lepType,date,location);
    

      // Create the link based on the commonName
      // const link = prediction.commonName.replace(/ /g, '') +  '.html';
      // window.location.href = link;
      newRow.innerHTML = `
                <td>${uploaderName}</td>
                <td>${uploadReferenceID}</td>
                <td><a href="${link}" target="_blank">${prediction.commonName}</a></td>           
                <td>${percent}</td>
                <td>${imgId}</td>
                <td>${imgData}</td>
                <td>${uploadImage}</td>
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
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      console.log("Row deleted successfully");
    } else {
      console.error("Failed to delete row");
    }
  });
}
document.getElementById("uploadForm").addEventListener("submit", uploadImage);

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
function predictImage(imageData) {
  // Placeholder for actual model prediction logic
  // This should return an array of predictions with labels and confidence scores
  return [
    { commonName: "Common Mormon", confidence: 0.85 },
    { commonName: "Blue Mormon", confidence: 0.1 },
    { commonName: "Swallowtail", confidence: 0.05 },
  ];
}

function displayPredictions(predictions) {
  const predictionsDiv = document.getElementById("predictions");
  predictionsDiv.innerHTML = "";

  predictions.forEach((prediction) => {
    const p = document.createElement("p");
    p.textContent = `${prediction.commonName}: ${(
      prediction.confidence * 100
    ).toFixed(2)}%`;

    const slider = document.createElement("input");
    slider.type = "range";
    slider.className = "prediction-slider";
    slider.min = 0;
    slider.max = 100;
    slider.value = (prediction.confidence * 100).toFixed(2);
    slider.disabled = true;

    predictionsDiv.appendChild(p);
    predictionsDiv.appendChild(slider);
  });
}

function displayNoResults() {
  const predictionsDiv = document.getElementById("predictions");
  predictionsDiv.innerHTML =
    "<p>No results found. Please try again with a different image.</p>";
}

//img display

function displayImage() {
  const imgId = document.getElementById("image-id").value;
  const imgData = localStorage.getItem(imgId);
  const tableBody = document.getElementById("imageTableBody");
  const newRow = document.createElement("tr");
  const randomIndex = Math.floor(Math.random() * predLabel.length);
  const prediction = predLabel[randomIndex];
  const uploaderName = fname[Math.floor(Math.random() * fname.length)]; // Replace with dynamic data if needed
  const uploadReferenceID = Date.now().toString();
  //const lifeStages= lifecycleStages[Math.floor(Math.random() * lifecycleStages.length[0])];
  //const commonName = predOutput[Math.floor(Math.random() * predOutput.length)]; // Replace with dynamic data if needed

  const percent = (Math.random() * 100).toFixed(2) + "%"; // Replace with dynamic data if needed
  const uploadImage = file.name;
  const size = file.size;
  const mimeType = file.type;
  const lastModified = file.lastModified;
  //const content = predLep[Math.floor(Math.random() * predLep.length)]; // Replace with dynamic data if needed

  const lepType = predLabel[Math.floor(Math.random() * predLabel.length)]; // Replace with dynamic data if needed
  const date = new Date().toLocaleDateString();
  const location =
    spotlocation[Math.floor(Math.random() * spotlocation.length)];
  localStorage.setItem(imgId, imgData,uploaderName,prediction,uploadReferenceID,percent,uploadImage,size,mimeType,lastModified,lepType,date,location);


  if (imgData) {
    const imgElement = document.createElement("img");
    imgElement.src = imgData;
    document.getElementById("image-container").innerHTML = "";
    document.getElementById("image-container").appendChild(imgElement);

    addImageToTable(imgId, imgData);
  } else {
    alert("No image found for the given ID.");
  }
}

function addImageToTable(imgId, imgData) {
  const table = document
    .getElementById("butterflyTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const idCell = newRow.insertCell(0);
  idCell.textContent = imgId;

  const imgCell = newRow.insertCell(1);
  const imgElement = document.createElement("img");
  imgElement.src = imgData;
  imgElement.width = 100; // Adjust as needed
  imgCell.appendChild(imgElement);
}

function addLocation() {
  const location = prompt("Enter the location:");
  if (location) {
    const locationElement = document.createElement("p");
    locationElement.textContent = `Location: ${location}`;
    document.querySelector(".container").appendChild(locationElement);
  }
}

function postData() {
  alert("Data posted successfully!");
}
