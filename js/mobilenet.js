let mobilenet;
let atlas;

function createImg(){
    
}

function modelReady(){
    console.log("Model is Ready!!");
    mobilenet.predict(atlas,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results)
        let label= results[0].className;
        let prob = results[0].probability;
        fillSize(0);
        text(label,10,height-10);
        createP(label);
        createP(probability);
    }
}

function imageReady(){
    image(atlas,0,0,width,height);
    console.log("Image is Ready!!")
}
function setup(){
    createCanvas(640,480);
    atlas=createImg('Butterfly/Moth-Atlas/AA00001.jpg',imageReady);
    atlas.hide();
    background(640);
    mobilenet= ml5.imageClassifier("MobileNet", modelReady);
}


// Create a variable containing the result container
const element = document.getElementById("imageResult");

function startImageScan() {
    // Create a variable to initialize the ml5.js image classifier with MobileNet
    const classifier = ml5.imageClassifier('MobileNet');

    // Scan the uploaded image
    classifier.classify(document.getElementById("uploadedImage"), imageScanResult)
    element.innerHTML = "Loading...";
}

// Check for errors and display the results if there aren't any
function imageScanResult(error, results) {
    if (error) {
        element.innerHTML = error;
    } else {
        let num = results[0].confidence * 100;
        element.innerHTML = results[0].label + "   Confidence: " + num.toFixed(0) + " % ";
    }
}

function myReset() {
document.getElementById("myForm").reset();
}
