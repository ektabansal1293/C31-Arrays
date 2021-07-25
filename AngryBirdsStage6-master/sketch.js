const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

//number
var num = 100;
console.log(num);

//string
var str = "My name is Suhan";
console.log(str);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

//null
object = null;
console.log(object);

//array
var arr1 = [10,20,30,40,50];
console.log(arr1);

//One-dimensional array or 1D array
var arr2 = ["Suhan",18,true,null];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[3]);
console.log(arr2[4]);


//Two-dimensional array or 2D array
var arr3 = [[12,24],[13,26],[14,28]];
console.log(arr3[0][0]);
console.log(arr3[2][1]);

//add an element at the end of array
arr3.push("pizza");
console.log(arr3);

//delete an element from the end of array
arr3.pop();
console.log(arr3);

//No.of elements in the array
console.log(arr3.length);

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
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

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
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
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}