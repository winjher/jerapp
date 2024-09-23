
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

//   document.getElementById("butterfly").addEventListener("click", () => addExample(0))
//   document.getElementById("pupae").addEventListener("click", () => addExample(1))
//   document.getElementById("larvae").addEventListener("click", () => addExample(2))
//   document.getElementById("eggs").addEventListener("click", () => addExample(3))

//Care Management
  // document.getElementById("disease").addEventListener("click", () => addExample(4))
  // document.getElementById("defects").addEventListener("click", () => addExample(5))
// class Names
//  document.getElementById("atlas").addEventListener("click", () => addExample(6))
//  document.getElementById("batwing").addEventListener("click", () => addExample(7))
//  document.getElementById("clippers").addEventListener("click", () => addExample(8))
//  document.getElementById("commonjay").addEventListener("click", () => addExample(9))
//  document.getElementById("commonlime").addEventListener("click", () => addExample(10))
//  document.getElementById("commonmime").addEventListener("click", () => addExample(11))
//  document.getElementById("commonmormon").addEventListener("click", () => addExample(12))
//  document.getElementById("emeraldswallowtail").addEventListener("click", () => addExample(13))
//  document.getElementById("giantsilk").addEventListener("click", () => addExample(14))
//  document.getElementById("goldenbirdwing").addEventListener("click", () => addExample(15))
//  document.getElementById("greyglassytiger").addEventListener("click", () => addExample(16))
//  document.getElementById("greateggfly").addEventListener("click", () => addExample(17))
//  document.getElementById("greatyellowmormon").addEventListener("click", () => addExample(18))
//  document.getElementById("paperkite").addEventListener("click", () => addExample(19))
//  document.getElementById("pinkrose").addEventListener("click", () => addExample(20))
//  document.getElementById("plaintiger").addEventListener("click", () => addExample(21))
//  document.getElementById("redlacewing").addEventListener("click", () => addExample(22))
//  document.getElementById("scarletmormon").addEventListener("click", () => addExample(23))
//  document.getElementById("tailedjay").addEventListener("click", () => addExample(24))
//types of pupae defects
// document.getElementById("antbit").addEventListener("click", () => addExample(25))
// document.getElementById("deform").addEventListener("click", () => addExample(26))
// document.getElementById("old").addEventListener("click", () => addExample(27))
// document.getElementById("bend").addEventListener("click", () => addExample(28))
// document.getElementById("stretch").addEventListener("click", () => addExample(29))
// document.getElementById("healthy").addEventListener("click", () => addExample(30))

  //types of larval disease
//   document.getElementById("npvirus").addEventListener("click", () => addExample(31))
//   document.getElementById("bvirus").addEventListener("click", () => addExample(32))
//   document.getElementById("ophrcystis").addEventListener("click", () => addExample(33))
//   document.getElementById("tachi").addEventListener("click", () => addExample(34))
//   document.getElementById("tricho").addEventListener("click", () => addExample(35))
//   document.getElementById("healthylarvae").addEventListener("click", () => addExample(36))
    document.getElementById("ants").addEventListener("click", () => addExample(37))
    document.getElementById("birds").addEventListener("click", () => addExample(38))
    document.getElementById("chicken").addEventListener("click", () => addExample(39))
    document.getElementById("lizard").addEventListener("click", () => addExample(40))
    document.getElementById("mantis").addEventListener("click", () => addExample(41))
    document.getElementById("spider").addEventListener("click", () => addExample(42))
    document.getElementById("fruitflies").addEventListener("click", () => addExample(43))
    document.getElementById("gnats").addEventListener("click", () => addExample(44))
    document.getElementById("wasps").addEventListener("click", () => addExample(45))

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects","Atlas","Batwing","Clippers","Common Jay", "Common Lime","Common Mime","Common Mormon","Emerald Swallow Tail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay","Antbite","Deformed","Old","Overbend","Stetched","Healthy Pupae","Nuclear Polyhedrosis Virus","Baculo Viruses","Ophryocystis  Elektroscirrah","Tachinids Flies","Trichogramma Wasps","Healthy Larvae","Ants","Birds",'Chicken',"Lizard","Mantis","Spider","Fruit Flies","Gnats","Wasps"]
      
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

