const predictions = [
    ["Deformed ", 0.9],
    ["Stretch mark ", 0.7],
    ["Old ", 0.6],
    ["Overbend ", 0.5],
    ["Good", 0.3]
];

const predictionSlider = document.getElementById("predictionSlider");
const predictionLabel = document.getElementById("predictionLabel");
const imagePreview = document.getElementById("imagePreview");

predictionSlider.addEventListener("input", () => {
    const index = predictionSlider.value;
    const prediction = predictions[index];

    predictionLabel.textContent = `${prediction[0]}:${(prediction[1] * 100).toFixed(2)}%`
});

predictionSlider.dispatchEvent(new Event("input"));