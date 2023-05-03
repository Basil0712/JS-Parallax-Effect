const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageWidth = 928;
const imageHeight = 793;

let gameSpeed = 2;
let x = 0;
let x2 = imageWidth;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundLayer0 = new Image();
backgroundLayer0.src = "./src/Layer_0000_9.png";
const backgroundLayer1 = new Image();
backgroundLayer1.src = "./src/Layer_0001_8.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./src/Layer_0002_7.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./src/Layer_0003_6.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./src/Layer_0004_Lights.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./src/Layer_0005_5.png";
const backgroundLayer6 = new Image();
backgroundLayer6.src = "./src/Layer_0006_4.png";
const backgroundLayer7 = new Image();
backgroundLayer7.src = "./src/Layer_0007_Lights.png";
const backgroundLayer8 = new Image();
backgroundLayer8.src = "./src/Layer_0008_3.png";
const backgroundLayer9 = new Image();
backgroundLayer9.src = "./src/Layer_0009_2.png";
const backgroundLayer10 = new Image();
backgroundLayer10.src = "./src/Layer_0010_1.png";
const backgroundLayer11 = new Image();
backgroundLayer11.src = "./src/Layer_0011_0.png";

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundLayer0, x, 0);
  ctx.drawImage(backgroundLayer0, x2, 0);

  if(x < -imageWidth) x = imageWidth + x2 - gameSpeed;
  else x -= gameSpeed;

  if(x2 < -imageWidth) x2 = imageWidth + x - gameSpeed;
  else x2 -= gameSpeed;

  requestAnimationFrame(draw);
};
draw();
