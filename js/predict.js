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