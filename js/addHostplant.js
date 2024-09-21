
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

  document.getElementById("emptyleaf").addEventListener("click", () => addExample(16))
  document.getElementById("enoughleaf").addEventListener("click", () => addExample(17))
  document.getElementById("diseaseleaf").addEventListener("click", () => addExample(18))
  document.getElementById("maturedleaf").addEventListener("click", () => addExample(19))
  document.getElementById("softleaf").addEventListener("click", () => addExample(20))

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

     const classes = ["Amuyon", "Blood Flower", "Calamondin", "Crown Flower","Curry Leaf","Dutchman Pipevine","Indian Birthwort","Limeberry","Pomelo","Soursop","Sugar Apple", "Sweet Orange","Tetradium","Sweet Potato Vine","Wild Cucumber","Winged Prickly Ash","Enough Leaf", "Empty Leaf","Disease Leaf","Matured Leaf", "Soft Leaf"]
      
      document.getElementById("console").innerText = `
                Prediction: ${classes[result.label]}\n
                Probabilty: ${result.confidences[result.label]}
            `

      img.dispose()
    }

    await tf.nextFrame()
  }
}
//
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

