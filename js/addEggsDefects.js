
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

  //types of larval diseaasee
  document.getElementById("infertile").addEventListener("click", () => addExample(37))
  document.getElementById("unusualcolor").addEventListener("click", () => addExample(38))
  document.getElementById("healthyeggs").addEventListener("click", () => addExample(39))


  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects","Atlas","Batwing","Clippers","Common Jay", "Common Lime","Common Mime","Common Mormon","Emerald Swallow Tail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay","Antbite","Deformed","Old","Overbend","Stetched","Healthy Pupae","Nuclear Polyhedrosis Virus","Baculo Viruses","Ophryocystis  Elektroscirrah","Tachinids Flies","Trichogramma Wasps","Healthy Larvae", "Infertile", "Unsual Color", "Healthy"]
  
      document.getElementById("console").innerText = `
                Prediction: ${classes[result.label]}\n
                Probabilty: ${result.confidences[result.label]}
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