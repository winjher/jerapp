const predictions = [
    ["Moth-Atlas", 0.9],
    ["Butterfly-Batwing ", 0.06],
    ["Butterfly-Clippers", 0.02],
    ["Butterfly-Common Jay", 0.01],
    ["Butterfly-Common Lime", 0.01]
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

// ["Common Mime","Common Mormon","Emerald Swallow Tail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay"]
    