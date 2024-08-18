const predictions = [
    ["Moth-Atlas", 0.01],
    ["Butterfly-Batwing ", 0.01],
    ["Butterfly-Clippers", 0.02],
    ["Butterfly-Common Jay", 0.06],
    ["Butterfly-Common Lime", 0.9]
];

const predictionSlider = document.getElementById("predictionSlider");
const predictionLabel = document.getElementById("predictionLabel");
const imagePreview = document.getElementById("imagePreview");

predictionSlider.addEventListener("input", () => {
    const index = predictionSlider.value;
    const prediction = predictions[index];
    predictionLabel.textContent = `${prediction[0]}: ${(prediction[1] * 100).toFixed(2)}%`;
});

// Set initial prediction label
predictionSlider.dispatchEvent(new Event("input"));

const commonName = ["Common Mime","Common Mormon","Emerald Swallow Tail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay"]

let text=[];
// for (let i=0;i<predictions.length; i++){
//     text +=commonName[i] + "<br>";
// }
const commonNames = document.getElementById("commonName");
document.getElementById(predictionLabel1).innerHTML=commonNames;
document.getElementById(predictionLabel2).innerHTML=commonNames;
document.getElementById(predictionLabel3).innerHTML=commonNames;
document.getElementById(predictionLabel4).innerHTML=commonNames;
