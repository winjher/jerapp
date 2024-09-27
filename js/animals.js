// Image Classification with MobileNet
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// https://youtu.be/yNkAuWz5lnY
// https://thecodingtrain.com/learning/ml5/1.1-image-classification.html
// https://editor.p5js.org/codingtrain/sketches/qFZF7iDe

let mobilenet;
let puffin;

function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    // className and probability have been renamed to
    // label and confidence
    let label = results[0].label;
    let prob = results[0].confidence;
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
  }
}

// Preload is a simpler way to load the image
function preload() {
  puffin = loadImage("images/puffin.jpg");
}

function setup() {
  createCanvas(640, 480);
  background(0);
  image(puffin, 0, 0, width, height);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
