const tf = require('@tensorflow/tfjs-node-gpu');
const fs = require('fs');
const path = require('path');

const TRAIN_IMAGES_DIR = 'C:/Users/jerwin/Documents/Montellano/Butterfly/Dataset/train';
const TEST_IMAGES_DIR = 'C:/Users/jerwin/Documents/Montellano/Butterfly/Dataset/val';

function loadImages(dataDir) {
    const images = [];
    const labels = [];
    const files = fs.readdirSync(dataDir);

    files.forEach(file => {
        if (!file.toLowerCase().endsWith(".png")) return;
        const filePath = path.join(dataDir, file);
        const buffer = fs.readFileSync(filePath);
        const imageTensor = tf.node.decodeImage(buffer)
            .resizeNearestNeighbor([96, 96])
            .toFloat()
            .div(tf.scalar(255.0))
            .expandDims();
        images.push(imageTensor);

        const label = getLabelFromFileName(file);
        labels.push(label);
    });

    console.log('Labels are:', labels);
    return [images, labels];
}

function getLabelFromFileName(fileName) {
    const lowerCaseFileName = fileName.toLowerCase();

    if (lowerCaseFileName.includes("batwing")) return 1;
    if (lowerCaseFileName.includes("clippers")) return 2;
    if (lowerCaseFileName.includes("common jay")) return 3;
    if (lowerCaseFileName.includes("common lime")) return 4;
    if (lowerCaseFileName.includes("common mime")) return 5;
    if (lowerCaseFileName.includes("common mormon")) return 6;
    if (lowerCaseFileName.includes("emerald swallowtail")) return 7;
    if (lowerCaseFileName.includes("golden birdwing")) return 8;
    if (lowerCaseFileName.includes("great eggfly")) return 9;
    if (lowerCaseFileName.includes("great yellow mormon")) return 10;
    if (lowerCaseFileName.includes("gray glassy tiger")) return 11;
    if (lowerCaseFileName.includes("paper kite")) return 12;
    if (lowerCaseFileName.includes("pink rose")) return 13;
    if (lowerCaseFileName.includes("plain tiger")) return 14;
    if (lowerCaseFileName.includes("red lacewing")) return 15;
    if (lowerCaseFileName.includes("scarlet mormon")) return 16;
    if (lowerCaseFileName.includes("tailed jay")) return 17;
    if (lowerCaseFileName.includes("defects crumpled wings common lime")) return 18;
    if (lowerCaseFileName.includes("defects crumpled wings tailed jay")) return 19;
    if (lowerCaseFileName.includes("defects deformed pupae common lime")) return 20;
    if (lowerCaseFileName.includes("defects overbend pupae common lime")) return 21;
    if (lowerCaseFileName.includes("defects overbend pupae common mormon")) return 22;
    if (lowerCaseFileName.includes("defects pupae golden birdwing")) return 23;
    if (lowerCaseFileName.includes("disease larvae golden birdwing")) return 24;
    if (lowerCaseFileName.includes("disease larvae tachinid fly")) return 25;

    return 0;
}

class ButterflyDataset {
    constructor() {
        this.trainData = [];
        this.testData = [];
    }

    loadData() {
        console.log('Loading images...');
        this.trainData = loadImages(TRAIN_IMAGES_DIR);
        this.testData = loadImages(TEST_IMAGES_DIR);
        console.log('Images loaded successfully.');
    }

    getTrainData() {
        return {
            images: tf.concat(this.trainData[0]),
            labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 25).toFloat() // Adjust based on the number of classes
        };
    }

    getTestData() {
        return {
            images: tf.concat(this.testData[0]),
            labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 25).toFloat() // Adjust based on the number of classes
        };
    }
}

module.exports = new ButterflyDataset();
console.log('All done.');


// javascript
// import * as tf from '@tensorflow/tfjs';

// Preprocess your dataset
//async function preprocessData() {
  // Implement the preprocessing steps specific to your dataset here
//}

// Create the convolutional base
// function createModel() {
//   const model = tf.sequential();
//   model.add(tf.layers.conv2d({inputShape: [32, 32, 3], filters: 32, kernelSize: 3, activation: 'relu'}));
//   model.add(tf.layers.maxPooling2d({poolSize: 2}));
//   model.add(tf.layers.conv2d({filters: 64, kernelSize: 3, activation: 'relu'}));
//   model.add(tf.layers.maxPooling2d({poolSize: 2}));
//   model.add(tf.layers.conv2d({filters: 64, kernelSize: 3, activation: 'relu'}));
//   model.add(tf.layers.flatten());
//   model.add(tf.layers.dense({units: 64, activation: 'relu'}));
//   model.add(tf.layers.dense({units: 10}));  // Adjust the units based on the number of classes in your dataset

//   model.compile({optimizer: 'adam', 
//                  loss: tf.losses.sparseCategoricalCrossentropy, 
//                  metrics: ['accuracy']});

//   return model;
// }

// // Train the model
// async function trainModel(model, dataset) {
//   const history = await model.fitDataset(dataset, {
//     epochs: 10,
//     validationSplit: 0.2  // Adjust based on your validation needs
//   });

//   history.history.acc.forEach((accuracy, i) => {
//     console.log(`Epoch ${i + 1}: accuracy = ${accuracy}`);
//   });
// }

// // Main function to run everything
// async function run() {
//   const dataset = await preprocessData();
//   const model = createModel();
//   await trainModel(model, dataset);
// }

// run();
