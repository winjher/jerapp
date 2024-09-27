let mobilenet;
let atlas;

function modelReady() {
    console.log("Model is Ready!!!");
    mobilenet.classify(atlas, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        if (results && results.length > 0) {
            let label = results[0].className;
            let prob = results[0].probability;
            fill(0);
            textSize(24);
            text(label, 10, height - 10);
            createP(`Label: ${label}`);
            createP(`Probability: ${prob}`);
        } else {
            console.log("No results found");
        }
    }
}

function imageReady() {
    image(atlas, 0, 0, width, height);
    console.log("Image is Ready!!");
}

function setup() {
    createCanvas(640, 480);
    atlas = createImg('C:/Users/jerwin/Documents/GitHub/jerapp/images/butterfly_atlas.jpg', imageReady);
    atlas.hide();
    background(224);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}




