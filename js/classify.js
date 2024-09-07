
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



//adding  labels
import { saveAs } from 'file-saver';

const classifier = knnClassifier.create();
const webcamElement = document.getElementById("webcam");
const flipButton = document.getElementById("flipButton");
const flipBackButton = document.getElementById("flipBackButton");
const takePictureButton = document.getElementById("takePictureButton");

let net;
let isFlipped = false;

async function app() {
  console.log("Loading mobilenet...");

  net = await mobilenet.load();
  console.log("Loaded model");

  const webcam = await tf.data.webcam(webcamElement);

  const addExample = async (classId) => {
    const img = await webcam.capture();
    const activation = net.infer(img, true);
    classifier.addExample(activation, classId);

    // Save the image
    const canvas = document.createElement('canvas');
    canvas.width = img.shape[1];
    canvas.height = img.shape[0];
    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(new Uint8ClampedArray(img.dataSync()), img.shape[1], img.shape[0]);
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
      saveAs(blob, `class-${classId}.png`);
    });

    img.dispose();
  };

  // Adding event listeners for different classes
  document.getElementById("butterfly").addEventListener("click", () => addExample(0));
  document.getElementById("pupae").addEventListener("click", () => addExample(1));
  document.getElementById("larvae").addEventListener("click", () => addExample(2));
  document.getElementById("eggs").addEventListener("click", () => addExample(3));

  // Care Management
  document.getElementById("disease").addEventListener("click", () => addExample(4));
  document.getElementById("defects").addEventListener("click", () => addExample(5));

  // Flip video feed
  flipButton.addEventListener("click", () => {
    isFlipped = true;
    webcamElement.style.transform = "scaleX(-1)";
  });

  // Flip back video feed
  flipBackButton.addEventListener("click", () => {
    isFlipped = false;
    webcamElement.style.transform = "scaleX(1)";
  });

  // Take picture
  takePictureButton.addEventListener("click", async () => {
    const img = await webcam.capture();
    const canvas = document.createElement('canvas');
    canvas.width = img.shape[1];
    canvas.height = img.shape[0];
    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(new Uint8ClampedArray(img.dataSync()), img.shape[1], img.shape[0]);
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
      saveAs(blob, `picture.png`);
    });
    img.dispose();
  });

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture();
      const activation = net.infer(img, "conv_preds");
      const result = await classifier.predictClass(activation);

      const classes = [
        "Butterfly", "Pupae", "Larvae", "Eggs", "Disease", "Defects", "Atlas", "Batwing", "Clippers",
        "Common Jay", "Common Lime", "Common Mime", "Common Mormon", "Emerald Swallow Tail", "Giant Silk Moth",
        "Golden Birdwing", "Grey Glassy Tiger", "Great Eggfly", "Great Yellow Mormon", "Paper Kite", "Pink Rose",
        "Plain Tiger", "Red Lacewing", "Scarlet Mormon", "Tailed Jay", "Antbite", "Deformed", "Old", "Overbend",
        "Stretched", "Healthy Pupae", "Nuclear Polyhedrosis Virus", "Baculo Viruses", "Ophrycysts Elektroscirrah",
        "Tachinids Flies", "Trichogramma Wasps", "Healthy Larvae"
      ];

      document.getElementById("console").innerText = `
        prediction: ${classes[result.label]}\n
        probability: ${result.confidences[result.label]}
      `;
    }
  }
}



// camera stream video element
let on_stream_video = document.querySelector('#camera-stream');
// flip button element
let flipBtn = document.querySelector('#flip-btn');

// default user media options
let constraints = { audio: false, video: true }
let shouldFaceUser = true;

// check whether we can use facingMode
let supports = navigator.mediaDevices.getSupportedConstraints();
if( supports['facingMode'] === true ) {
  flipBtn.disabled = false;
}

let stream = null;

function capture() {
  constraints.video = {
      width: {
      min: 192,
      ideal: 192,
      max: 192,
    },
    height: {
      min: 192,
      ideal: 192,
      max: 192
    },
    facingMode: shouldFaceUser ? 'user' : 'environment'
  }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      stream  = mediaStream;
      on_stream_video.srcObject = stream;
      on_stream_video.play();
    })
    .catch(function(err) {
      console.log(err)
    });
}
app()
