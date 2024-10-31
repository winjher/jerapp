const tf = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');

const imageDirectory = 'C:/Users/jerwin/Documents/Butterfly'; 
const imageWidth = 224; const imageHeight = 224; const batchSize = 32;
const imageDataset = tfnode.data.imageDataset(imageDirectory, null, { labelFactory: (dir) => tfnode.oneHot(tfnode.tensor1d([parseInt(dir.split('/')[0])]), 10), imageShape: [imageHeight, imageWidth, 3], });
const trainDataset = imageDataset.take(0.8 * imageDataset.size); const validationDataset = imageDataset.skip(0.8 * imageDataset.size);
const trainData = await trainDataset .shuffle(trainDataset.size) .batch(batchSize) .prefetch(1) .cache();

const model = tf.sequential();
   model.add(tf.layers.conv2d({
     inputShape: [imageHeight, imageWidth, 3],
     kernelSize: 3,
     filters: 16,
     activation: 'relu',
   }));

   model.add(tf.layers.maxPooling2d({
     poolSize: 2,
   }));

   model.add(tf.layers.flatten());

   model.add(tf.layers.dense({
     units: 10,
     activation: 'softmax',
   }));

model.summary();


const learningRate = 0.001; const optimizer = tf.train.adam(learningRate); const loss = 'categoricalCrossentropy'; const metrics = ['accuracy'];
model.compile({ optimizer, loss, metrics, });
const epochs = 10; const validationSplit = 0.2;
await model.fit(trainData, { epochs, validationSplit, callbacks: tfnode.callbacks.earlyStopping({ monitor: 'val_loss', patience: 3, }), });


const testImages = await validationDataset.toArray();
const testLabels = await validationDataset.map((image, label)=> label).toArray();

const testTensor = tfnode.stack(testImages);
const predictions = model.predict(testTensor);

// Evaluate model accuracy
const trueLabels = tfnode.stack(testLabels);
const accuracy = tf.metrics.categoricalAccuracy(trueLabels, predictions);
console.log(`Accuracy: ${accuracy.dataSync()[0]}`);

// Make predictions on new images
const newImage = await loadImage('C:/Users/jerwin/Documents/Butterfly/Butterfly-Clippers/Clippers Butterfly SYLIVIA1.jpg');
const preprocessedImage = preprocessImage(newImage);
const prediction = model.predict(preprocessedImage);
console.log(prediction);
