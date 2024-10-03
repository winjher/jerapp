const predictions = [
    ["Deformed ", 0.9],
    ["Stretch mark ", 0.7],
    ["Old ", 0.6],
    ["Overbend ", 0.5],
    ["Good Quality", 0.3]
];

const pred_output=[
    ['Activity Basking', 'Activity Foraging', 'Activity Mating', 'Activity Molting', 'Activity Munching', 'Activity Nectaring', 'Activity Pudding', 'Activity Pupating', 'Butterfly-Batwing', 'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime', 'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail', 'Butterfly-Giant Silk Moth', 'Butterfly-Golden Birdwing', 'Butterfly-Great Eggfly', 'Butterfly-Great Yellow Mormon', 'Butterfly-Grey Glassy Tiger', 'Butterfly-Paper Kite', 'Butterfly-Pink Rose', 'Butterfly-Plain Tiger', 'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Tailed Jay', 'Defects Broken Wings Atlas', 'Defects Crumpled Wings Butterfly-Common Lime', 'Defects Crumpled Wings Butterfly-Tailed Jay', 'Defects Deformed Pupae-Common Lime', 'Defects Overbend Pupae-Common Lime', 'Defects Overbend Pupae-Common Mormon', 'Defects Pupae-Golden Birdwing', 'Defects Stretch Mark-Common Mormon', 'Disease Larvae Golden Birdwing', 'Disease Larvae Tachinids fly', 'Disease Larvae-Plain Tiger', 'Eggs-Common Jay', 'Eggs-Common Lime', 'Eggs-Golden Birdwing', 'Eggs-Pink Rose', 'Eggs-Plain Tiger', 'Eggs-Red Lacewing', 'Eggs-Tailed Jay', 'Healthy Larvae-Golden Birdwing', 'Healthy Pupae-Common Lime', 'Healthy Pupae-Golden Birdwing', 'Larvae Common Jay', 'Larvae Instar-Common Lime', 'Larvae Instar-Golden Birdwing', 'Larvae-Atlas', 'Larvae-Clippers', 'Larvae-Common Jay', 'Larvae-Common Lime', 'Larvae-Eggs-Golden Birdwing', 'Larvae-Giant Silk Moth', 'Larvae-Golden Birdwing', 'Larvae-Paper Kite', 'Larvae-Pink Rose', 'Larvae-Plain Tiger', 'Larvae-Red Lacewing', 'Larvae-Tailed Jay', 'Moth-Atlas', 'Moth-Giant Silk', 'Old Pupae-Plain Tiger', 'Ovipositing-Tailed Jay', 'Predators Ants-Golden Birdwing', 'Prepupae Larvae-Golden Birdwing', 'Prepupae Tailed Jay', 'Pupae-Common Jay', 'Pupae-Common Lime', 'Pupae-Golden Birdwing', 'Pupae-Paper Kite', 'Pupae-Pink Rose', 'Pupae-Plain Tiger', 'Pupae-Tailed Jay', 'Skipper-Club Silverline', 'Skipper-GrassSkipper', 'Skipper-PaintBrushSwift', 'Skipper-PlainPalmDart', 'Skipper-RiceSwift']
]

for (const [label, confidence] of predictions) {
    if (confidence >= 0.8) {
        console.log(`${label}: High confidence`);
    } else if (confidence >= 0.6) {
        console.log(`${label}: Medium confidence`);
    } else if (confidence >= 0.4) {
        console.log(`${label}: Low confidence`);
    } else {
        console.log(`${label}: Very low confidence`);
    }
}
const predictionSlider = document.getElementById("predictionSlider");
const predictionLabel = document.getElementById("predictionLabel");
const imagePreview = document.getElementById("imagePreview");

predictionSlider.addEventListener("input", () => {
    const index = predictionSlider.value;
    const prediction = predictions[index];

    predictionLabel.textContent = `${prediction[0]}:${(prediction[1] * 100).toFixed(2)}%`
});

predictionSlider.dispatchEvent(new Event("input"));