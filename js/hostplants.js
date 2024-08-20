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

//types of pupae defects
document.getElementById("amuyon").addEventListener("click", () => addExample(0))
document.getElementById("bloodflwr").addEventListener("click", () => addExample(1))
document.getElementById("clamondin").addEventListener("click", () => addExample(2))
document.getElementById("crownflwr").addEventListener("click", () => addExample(3))
document.getElementById("curryleaf").addEventListener("click", () => addExample(4))
document.getElementById("dutchmanpipe").addEventListener("click", () => addExample(5))
document.getElementById("indianbirt").addEventListener("click", () => addExample(6))
document.getElementById("limeberry").addEventListener("click", () => addExample(7))
document.getElementById("pomelo").addEventListener("click", () => addExample(8))
document.getElementById("soursop").addEventListener("click", () => addExample(9))
document.getElementById("sugarapple").addEventListener("click", () => addExample(10))
document.getElementById("sweetorange").addEventListener("click", () => addExample(11))
document.getElementById("sweetpotato").addEventListener("click", () => addExample(12))
document.getElementById("tetradium").addEventListener("click", () => addExample(13))
document.getElementById("wildcucumber").addEventListener("click", () => addExample(14))
document.getElementById("wingedprickly").addEventListener("click", () => addExample(15))

while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)
      
      const classes = ["Amuyon", "Blood Flower", "Calamondin", "Crown Flower","Curry Leaf","Dutchman Pipevine","Indian Birthwort","Limeberry","Pomelo","Soursop","Sugar Apple", "Sweet Orange","Tetradium","Sweet Potato Vine","Wild Cucumber","Winged Prickly Ash"]
  
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