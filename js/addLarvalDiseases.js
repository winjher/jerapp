
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
  document.getElementById("npvirus").addEventListener("click", () => addExample(31))
  document.getElementById("bvirus").addEventListener("click", () => addExample(32))
  document.getElementById("opelek").addEventListener("click", () => addExample(33))
  document.getElementById("ophyte").addEventListener("click", () => addExample(34))
  document.getElementById("tachi").addEventListener("click", () => addExample(35))
  document.getElementById("tricho").addEventListener("click", () => addExample(36))
  document.getElementById("healthylarvae").addEventListener("click", () => addExample(37))


  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects","Atlas","Batwing","Clippers","Common Jay", "Common Lime","Common Mime","Common Mormon","Emerald Swallow Tail","Giant Silk Moth","Golden Birdwing","Grey Glassy Tiger","Great Eggfly","Great Yellow Mormon","Paper Kite","Pink Rose","Plain Tiger","Red Lacewing","Scarlet Mormon","Tailed Jay","Antbite","Deformed","Old","Overbend","Stetched","Healthy Pupae","Nuclear Polyhedrosis Virus","Baculo Viruses","Ophry Elek","Ophrycocytes","tachinids Flies","Trichogramma","Healthy Larvae"]

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