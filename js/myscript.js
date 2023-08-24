

const image = document.getElementById('image');

const result = document.getElementById('result');

const probability = document.getElementById('probability');

document.getElementById('getval').addEventListener('change', readURL, true);


function readURL() {

    var file = document.getElementById("getval").files[0];

    if (file) {

        var reader = new FileReader();


        reader.onload = function (e) {

            image.src = e.target.result;

            ml5.imageClassifier('MobileNet')

                .then(classifier => classifier.classify(image)

                    .then(results => {

                        result.innerText = results[0].label;

                        probability.innerText = results[0].confidence.toFixed(4);


                    })

                )


        };


        reader.readAsDataURL(file);

    }

}




let classifier;  // Initialize the Image Classifier method with MobileNet and a callback needs to be passed.

let img;  // A variable to hold the image we want to classify.

// The function below will determine the specified source by comparing it with the model called MobileNet that has been prepared in advance.

function preload() {

classifier = ml5.imageClassifier('MobileNet');

img = loadImage('https://raw.githubusercontent.com/setapolo/fbxes/main/kit.png');

}

// The function below will determine and setup the image sizes, get the results as image.

function setup() {

createCanvas(400, 400);

classifier.classify(img, gotResult);

image(img, 0, 0);

}

// A function to run when we get any errors in console and the results.

function gotResult(error, results) {

if (error) {

console.error(error);

}

// The results are in an array ordered by confidence.

console.log(results);

createDiv('Label: ' + results[0].label);

createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));

}

