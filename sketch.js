const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,shelf1,shelf2;
var box = [];
var ball;

function setup(){
    createCanvas(1350,620);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(630,height,1500,30);
    shelf1 = new Ground(250,300,300,15);
    shelf2 = new Ground(1025,200,150,15);
    //on shelf 1 layer 1
    box1 = new Box(190,275,30,30);
    box2 = new Box(220,275,30,30);
    box3 = new Box(250,275,30,30);
    box4 = new Box(280,275,30,30);
    box5 = new Box(310,275,30,30);
    box6 = new Box(160,275,30,30);
    //on layer 2
    box7 = new Box(175,245,30,30);
    box8 = new Box(205,245,30,30);
    box9 = new Box(235,245,30,30);
    box10 = new Box(265,245,30,30);
    box11 = new Box(295,245,30,30);
 
    //On layer 3
    box12 = new Box(190,215,30,30);
    box13 = new Box(220,215,30,30);
    box14 = new Box(250,215,30,30);
    box15 = new Box(280,215,30,30);
    //on layer 4
    box16 = new Box(205,185,30,30);
    box17 = new Box(235,185,30,30);
    box18 = new Box(265,185,30,30);
    //on layer 5
    box19 = new Box(220,155,30,30);
    box20 = new Box(250,155,30,30);
    //on layer 6
    box21 = new Box(235,125,30,30);
// shelf 2 layer 1
    box22 = new Box(1052,175,30,30);
    box23 = new Box(1022,175,30,30);
    box24 = new Box(992,175,30,30);
   //layer2
    box25 = new Box(1036,145,30,30);
    box26 = new Box(1006,145,30,30);
    //layer3
    box27 = new Box(1022,115,30,30);
    //ground layer1 
    box28 = new Box(675,600,30,30);
    box29 = new Box(645,600,30,30);
    box30 = new Box(705,600,30,30);
    box31 = new Box(660,570,30,30);
    box32 = new Box(690,570,30,30);
    //layer6
    box33 = new Box(675,540,30,30);
  
    
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    shelf1.display();
    shelf2.display();
    
    fill("orange");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("turquoise");
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    fill("gold");
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    fill("pink")
    box16.display();
    box17.display();
    box18.display();
    fill("skyblue");
    box19.display();
    box20.display();
    fill("gold");
    box21.display();
    fill("orange");
    box22.display();
    box23.display();
    box24.display();
    fill("blue");
    box25.display();
    box26.display();
    fill("yellow");
    box27.display();
    fill("gold");
    box28.display();
    box29.display();
    box30.display();
    fill("skyblue");
    box31.display();
    box32.display();
    fill("pink")
    box33.display();
}