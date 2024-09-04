const tf = require('@tensorflow/tfjs-node-gpu');
const fs = require('fs');
const path = require('path');

const TRAIN_IMAGES_DIR = './data/train';
const TEST_IMAGES_DIR = './data/test';

function loadImages(dataDir) {
  const images = [];
  const labels = [];
  
  var files = fs.readdirSync(dataDir);
  for (let i = 0; i < files.length; i++) { 
    if (!files[i].toLocaleLowerCase().endsWith(".png")) {
      continue;
    }

    var filePath = path.join(dataDir, files[i]);
    
    var buffer = fs.readFileSync(filePath);
    var imageTensor = tf.node.decodeImage(buffer)
      .resizeNearestNeighbor([96,96])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();
    images.push(imageTensor);
    
    // here we assume every folder has file with name n_flower.png
    var butterfly = files[i].toLocaleLowerCase().endsWith("butterfly.png");
    var pupae = files[i].toLocaleLowerCase().endsWith("pupae.png");
    var prepupae = files[i].toLocaleLowerCase().endsWith("prepupae.png");
    var larvae = files[i].toLocaleLowerCase().endsWith("larvae.png");
    var eggs = files[i].toLocaleLowerCase().endsWith("eggs.png");
  
    
    if( butterfly == true){ labels.push(1)}
    else if (pupae == true) {labels.push(2)}
    else if (prepupae == true) {labels.push(3)}
    else if (larvae == true) {labels.push(4)}
    else {labels.push(0)}

  }
  console.log('Labels are');
  console.log(labels);
  return [images, labels];
}

/** Helper class to handle loading training and test data. */
class ButterflyDataset {
  constructor() {
    this.trainData = [];
    this.testData = [];
  }

  /** Loads training and test data. */
  loadData() {
    console.log('Loading images...');
    this.trainData = loadImages(TRAIN_IMAGES_DIR);
    this.testData = loadImages(TEST_IMAGES_DIR);
    console.log('Images loaded successfully.')
  }

  getTrainData() {
    return {
      
      images: tf.concat(this.trainData[0]),
      labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 5).toFloat() // here 5 is class
      
    }
  }

  getTestData() {
    return {
      images: tf.concat(this.testData[0]),
      labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 5).toFloat()
    }
  }
}

module.exports = new ButterflyDataset();
console.log('All done.')