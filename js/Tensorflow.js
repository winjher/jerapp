import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as path from 'path';
import { ImageDataGenerator } from 'tfjs-image-data-generator';

// Data Preprocessing
const trainDatagen = new ImageDataGenerator({
  rescale: 1 / 255,
  shear_range: 0.2,
  zoom_range: 0.2,
  horizontal_flip: true
});
const testDatagen = new ImageDataGenerator({
  rescale: 1 / 255
});

const training_set = trainDatagen.flow_from_directory(
  'training_set',
  {
    target_size: [64, 64],
    batch_size: 32,
    class_mode: 'categorical'
  }
);

const test_set = testDatagen.flow_from_directory(
  'test_set',
  {
    target_size: [64, 64],
    batch_size: 32,
    class_mode: 'categorical'
  }
);

// Model Architecture
const model = tf.sequential();
model.add(tf.layers.conv2d({
  filters: 64,
  kernelSize: 3,
  activation: 'relu',
  inputShape: [64, 64, 3]
}));
model.add(tf.layers.maxPooling2d({
  poolSize: 2,
  strides: 2
}));

model.add(tf.layers.conv2d({
  filters: 64,
  kernelSize: 3,
  activation: 'relu'
}));
model.add(tf.layers.maxPooling2d({
  poolSize: 2,
  strides: 2
}));

model.add(tf.layers.dropout({ rate: 0.5 }));

model.add(tf.layers.flatten());

model.add(tf.layers.dense({
  units: 128,
  activation: 'relu'
}));

model.add(tf.layers.dense({
  units: 5,
  activation: 'softmax'
}));

// Compile Model
model.compile({
  optimizer: 'rmsprop',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

// Train Model
(async () => {
  await model.fitDataset(training_set, {
    validationData: test_set,
    epochs: 30
  });

  // Making Predictions
  const img = fs.readFileSync('Prediction/Scarlet.jpg');
  const imgTensor = tf.node.decodeImage(img).resizeNearestNeighbor([64, 64]).expandDims().toFloat().div(tf.scalar(255));

  const prediction = model.predict(imgTensor).dataSync();
  const classes = training_set.class_indices;
  
  if (prediction[0] === 1) {
    console.log('Butterfly-Clippers');
  } else if (prediction[1] === 1) {
    console.log('Butterfly-Common Jay');
  } else if (prediction[2] === 1) {
    console.log('Butterfly-Common Lime');
  } else if (prediction[3] === 1) {
    console.log('Butterfly-Common Mime');
  } else if (prediction[4] === 1) {
    console.log("Butterfly-Common Mormon");
  }else if (prediction[5] === 1) {
    console.log("Butterfly-Emerald Swallowtail");
  }else if (prediction[6] === 1) {
    console.log("Butterfly-Golden Birdwing");
  }else if (prediction[7] === 1) {
    console.log("Butterfly-Gray Glassy Tiger");
  }else if (prediction[8] === 1) {
    console.log("Butterfly-Great Eggfly");
  }else if (prediction[9] === 1) {
    console.log("Butterfly-Great Yellow Mormon");
  }else if (prediction[10] === 1) {
    console.log("Butterfly-Paper Kite");
  }else if (prediction[11] === 1) {
    console.log("Butterfly-Pink Rose");
  }else if (prediction[12] === 1) {
    console.log("Butterfly-Plain Tiger");
  }else if (prediction[13] === 1) {
    console.log("Butterfly-Red Lacewing");
  }else if (prediction[16] === 1) {
    console.log("Butterfly-Scarlet Mormon");
  }else if (prediction[14] === 1) {
    console.log("Butterfly-Tailed Jay");
  }else if (prediction[15] === 1) {
    console.log("Moth-Atlas");
  }else if (prediction[16] === 1) {
    console.log("Moth-Giant Silk");
  
  }
})();
