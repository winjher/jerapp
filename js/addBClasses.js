
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

 //class Names
 document.getElementById("atlas").addEventListener("click", () => addExample(6))
 document.getElementById("clippers").addEventListener("click", () => addExample(7))
 document.getElementById("commonjay").addEventListener("click", () => addExample(8))
 document.getElementById("commonlime").addEventListener("click", () => addExample(9))
 document.getElementById("commonmime").addEventListener("click", () => addExample(10))
 document.getElementById("commonmormon").addEventListener("click", () => addExample(11))
 document.getElementById("emeraldswallowtail").addEventListener("click", () => addExample(12))
 document.getElementById("giantsilk").addEventListener("click", () => addExample(13))
 document.getElementById("goldenbirdwing").addEventListener("click", () => addExample(14))
 document.getElementById("greyglassytiger").addEventListener("click", () => addExample(15))
 document.getElementById("greateggfly").addEventListener("click", () => addExample(16))
 document.getElementById("greatyellowmormon").addEventListener("click", () => addExample(17))
 document.getElementById("paperkite").addEventListener("click", () => addExample(18))
 document.getElementById("pinkrose").addEventListener("click", () => addExample(19))
 document.getElementById("plaintiger").addEventListener("click", () => addExample(20))
 document.getElementById("redlacewing").addEventListener("click", () => addExample(21))
 document.getElementById("scarletmormon").addEventListener("click", () => addExample(22))
 document.getElementById("tailedjay").addEventListener("click", () => addExample(23))



  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Butterfly", "Pupae", "Larvae", "Eggs","Disease","Defects", "atlas","clippers","commonjay","commonlime","commonmime","commonmormon","emeraldswallowtail","giantsilk","goldenbirdwing","greyglassytiger","greateggfly","greatyellowmormon","paperkite","pinkrose","plaintiger","redlacewing","scarletmormon","tailedjay","antbite","deformed","old","overbend","stetched","healthypupae","npvirus","bvirus","opelek","opecytes","tachi","tricho","healthylarvae"]

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
