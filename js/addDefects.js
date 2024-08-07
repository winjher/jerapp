
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

//types of pupae defects
document.getElementById("antbite").addEventListener("click", () => addExample(24))
document.getElementById("deformed").addEventListener("click", () => addExample(25))
document.getElementById("old").addEventListener("click", () => addExample(26))
document.getElementById("overbend").addEventListener("click", () => addExample(27))
document.getElementById("stetched").addEventListener("click", () => addExample(28))
document.getElementById("healthypupae").addEventListener("click", () => addExample(29))


  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects", "Atlas","Clippers","Common Jay","Common Lime","Common Mime","Common Mormon","Emerald Swallowtail","Giant Silk","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay","antbite","deformed","old","overbend","stetched","healthypupae","npvirus","bvirus","opelek","opecytes","tachi","tricho","healthylarvae"]
      
      document.getElementById("console").innerText = `
                prediction: ${classes[result.label]}\n
                probabilty: ${result.confidences[result.label]}
            `

      img.dispose()
    }

    await tf.nextFrame()
  }
}

app()