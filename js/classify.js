
let adult = [];
let pupae = [];
let larvae = [];
let eggs = [];
let pupaDefects = [];
let pupaHealthy = [];
let larvalDiseases = [];
let larvaeHealthy = [];

function preload(){
    for (let i=0;i<100;i++){
        let index = nf(i + 1,4,0);
        adult[i] = loadImage(`data/adult${index}.jpg`);
        pupae[i] = loadImage(`data/pupae${index}.jpg`);
        larvae[i] = loadImage(`data/larvae${index}.jpg`);
        eggs[i] = loadImage(`data/eggs${index}.jpg`);
        pupaDefects[i] = loadImage(`data/pupaDefects${index}.jpg`);
        pupaHealthy[i] = loadImage(`data/pupaHealthy${index}.jpg`);
        larvalDiseases[i] = loadImage(`data/larvalDiseases${index}.jpg`);
        larvaeHealthy[i] = loadImage(`data/larvaeHealthy${index}.jpg`); 
    }
}

let shapeClassifier;

function setup(){
    createCanvas(400, 400);
    background(0);
    image(squares[0],0,0,width, height);

    let options = {
        inputs: [64,64,4],
        task: 'imageClassification',
        debug: true,
    };


    shapeClassifier = ml5.neuralNetwork(options);
    //edit this
    for (let i=0; i < circles.length; i++){
        // let input = { image: circles[i]};
        // let target = {label: "circle"};
        // shapeClassifier.addData(input, target);
        // let input = ;
        // let target = ;
        shapeClassifier.addData({ image: circles[i]}, {label: "circle"});
        shapeClassifier.addData({ image: squares[i]}, {label: "square"});
        shapeClassifier.addData({ image: triangles[i]}, {label: "triangle"});

    }
    shapeClassifier.normalizeData();
    shapeClassifier.train({epochs: 50},finishedTraining)

}

function finishedTraining(){
    console.log("Finish training")
    shapeClassifier.save("model.json")
}


