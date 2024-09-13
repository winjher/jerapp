
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
const classifier = knnClassifier.create()
const webcamElement = document.getElementById("webcam")

let net

async function app() {
  console.log("Loading mobilnet...")

  net = await mobilenet.load()

  console.log("Loaded model")

  const webcam = await tf.data.webcam(webcamElement)

  const addExample = async (classId) => {
    const img = await webcam.capture()

    const activation = net.infer(img, true)

    classifier.addExample(activation, classId)

    img.dispose()
  }

  document.getElementById("butterfly").addEventListener("click", () => addExample(0))
  document.getElementById("pupae").addEventListener("click", () => addExample(1))
  document.getElementById("larvae").addEventListener("click", () => addExample(2))
  document.getElementById("eggs").addEventListener("click", () => addExample(3))

//Care Management
  document.getElementById("disease").addEventListener("click", () => addExample(4))
//Quality Assurance
  document.getElementById("defects").addEventListener("click", () => addExample(5))
//Activities
//Planning
//Raising Butterfly
//Harvest Operation

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects","Atlas","Batwing","Clippers","Common Jay", "Common Lime","Common Mime","Common Mormon","Emerald SwallowTail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay","Ant Bite","Deformed","Old","Overbend","Stretched","Healthy Pupae","Nuclear Polyhedrosis Virus","Baculoviruses","Ophryocystis  Elektroscirrha","Tachinid Flies","Trichogramma Wasps","Healthy Larvae","Molting","Munching","Nectaring","Ovipositing","Pudding","Pupating"]
      const class_conserve = ['Activity Molting', 'Activity Munching', 'Activity Nectaring', 'Activity Pudding', 'Butterfly-Batwing', 'Butterfly-Clippers', 'Butterfly-Common Jay', 'Butterfly-Common Lime', 'Butterfly-Common Mime', 'Butterfly-Common Mormon', 'Butterfly-Emerald Swallowtail', 'Butterfly-Giant Silk Moth', 'Butterfly-Golden Birdwing', 'Butterfly-Great Eggfly', 'Butterfly-Great Yellow Mormon', 'Butterfly-Grey Glassy Tiger', 'Butterfly-Paper Kite', 'Butterfly-Pink Rose', 'Butterfly-Plain Tiger', 'Butterfly-Red Lacewing', 'Butterfly-Scarlet Mormon', 'Butterfly-Tailed Jay', 'Defects Broken Wings Atlas', 'Defects Crumpled Wings Butterfly-Common Lime', 'Defects Crumpled Wings Butterfly-Tailed Jay', 'Defects Deformed Pupae-Common Lime', 'Defects Overbend Pupae-Common Lime', 'Defects Overbend Pupae-Common Mormon', 'Defects Pupae-Golden Birdwing', 'Defects Stretchedmark-Common Mormon', 'Disease Larvae Golden Birdwing', 'Disease Larvae Tachinids fly', 'Disease Larvae-Plain Tiger', 'Eggs-Common Jay', 'Eggs-Common Lime', 'Eggs-Golden Birdwing', 'Eggs-Pink Rose', 'Eggs-Plain Tiger', 'Eggs-Tailed Jay', 'Egs-Red Lacewing', 'Healthy Larvae-Golden Birdwing', 'Healthy Pupae-Common Lime', 'Healthy Pupae-Golden Birdwing', 'Larvae Common Jay', 'Larvae Instar-Common Lime', 'Larvae Instar-Golden Birdwing', 'Larvae-Atlas', 'Larvae-Clippers', 'Larvae-Common Jay', 'Larvae-Common Lime', 'Larvae-Eggs-Golden Birdwing', 'Larvae-Giant Silk Moth', 'Larvae-Golden Birdwing', 'Larvae-Paper Kite', 'Larvae-Pink Rose', 'Larvae-Plain Tiger', 'Larvae-Red Lacewing', 'Larvae-Tailed Jay', 'Moth-Atlas', 'Moth-Giant Silk', 'Old Pupae-Plain Tiger', 'Ovipositing-Tailed Jay', 'Predators Ants-Golden Birdwing', 'Prepupae Larvae-Golden Birdwing', 'Pupae-Common Jay', 'Pupae-Common Lime', 'Pupae-Golden Birdwing', 'Pupae-Golding Brdwing', 'Pupae-Paper Kite', 'Pupae-Pink Rose', 'Pupae-Plain Tiger', 'Pupae-Tailed Jay', 'Skipper-Club Silverline']
      
      document.getElementById("console").innerText = `
                prediction: ${classes[result.label]}\n
                probabilty: ${result.confidences[result.label]}
            `

      img.dispose()
    }

    await tf.nextFrame()
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
