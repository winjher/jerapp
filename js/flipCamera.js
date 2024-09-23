let currentStream;
let isFront = true;

async function startCamera() {
const constraints = {
video: {
facingMode: isFront ? 'user' : 'environment'
}
};
currentStream = await navigator.mediaDevices.getUserMedia(constraints);
document.getElementById('webcam').srcObject = currentStream;
}

document.getElementById('flip-btn').addEventListener('click', () => {
isFront = !isFront;
if (currentStream) {
currentStream.getTracks().forEach(track => track.stop());
}
startCamera();
});

startCamera();