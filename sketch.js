var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var gSlider;


function setup() {
createCanvas(700, 400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

gSlider = createSlider(0, 100, 50);
gSlider.position(530, 580);
gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
wSlider = createSlider(10,50,25);
wSlider.position(750, 580);
hSlider = createSlider(10,50,25);
hSlider.position(980, 580);
var options = {
    isStatic: true
}
ground = Bodies.rectangle(350, 380, 700, 50, options);
World.add(world, ground);
}
fVal = gSlider.value();
 wVal = wSlider.value();
 hVal = hSlider.value();
function mousePressed() {
if (mouseY < 350) {
    boxes.push(new Box(mouseX, mouseY, wVal, hVal));
}
}

function draw() {
background(0);
 fVal = gSlider.value();
 wVal = wSlider.value();
 hVal = hSlider.value();

for (var i = 0; i<boxes.length; i++) {
    boxes[i].show();
}

fill(0);
strokeWeight(2);
stroke(255) 
rectMode(CENTER);
rect(ground.position.x, ground.position.y, width, 50);
fill(255);
textSize(20);
text("Gravity " + fVal, 10, 381);
text("Width " +wVal,250, 381);
text("Height " +hVal,470, 381);
}

function Box(x, y, w, h, options) {
var options = {
    friction: 0.5,
    restitution: 0.5,
}

this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;
World.add(world, this.body);

this.show = function () {
    var pos = this.body.position;
 
    push();
    
    rectMode(CENTER);
    strokeWeight(5);
    stroke(50);
    fill(255);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
}
}