const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var string = "abcdefgh";
console.log(string);
var integer = 3;
console.log(integer);
var bool = true;
console.log(bool);
var arya;
console.log(arya);
var vineeta = null;
console.log(vineeta);
var array = [3,6,9,21];
console.log(array);
var array1 = [false,true,28];
console.log(array1);
var array2 = [array, array1, [3,8,5]]
console.log(array2 [2][2]);


var engine, world;
var box1, pig1;
var log1, log3, log4, log5;
var backgroundImg,platform;
var chain1;
var gameState = "ONSLING";
var s;
var score = 0;


function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);
  
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);


    bird = new Bird(100,100);
   chain1 = new chain(bird.body,{x:230, y:75});

}
function draw(){
    if(backgroundImg)
    background(backgroundImg);
    
    
    Engine.update(engine);
    fill("white");
    text("Score:"+score,10,15);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
  chain1.display();
    platform.display();
    getTime();
    pig1.score();
    pig3.score();
   
    
   

}
function mouseDragged(){
    if(gameState !== "LAUNCHED"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
    
    }
function mouseReleased(){
    gameState = "LAUNCHED";
    chain1.fly(); 
}
function keyPressed(){
    if(keyCode === 32){
        gameState = "ONSLING";
        chain1.attach(bird.body);
    }
}
async function getTime(){
    var xyz = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var xyzJson = await xyz.json();
    var dt = xyzJson.datetime;
    var hours = dt.slice(12,12);
    console.log(dt);
    if(hours>600 && hours<1200){
        backgroundImg= loadImage("sprites/bg.PNG");
    }
    else{
        backgroundImg= loadImage("sprites/bg2.PNG");
    }
}