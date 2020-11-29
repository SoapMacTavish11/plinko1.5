const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Play;
var End;
var gameState="Play";
var particle;
var divisions= [];
var plinkos = [];

var divisionHeight=300;
 
var ground;
var Turn=0;
var score = 0;

function setup() {
  createCanvas(600,800);

  engine = Engine.create();
	world = engine.world;
  
   ground=new Ground(300,792,602,20);

   for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }


  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  
  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}


function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null){
    particle.display();
   

   if(particle.body.position.y>760){
  if (particle.body.position.x<300) {
  score=score+500
  particle=null;
  if (Turn>=5) {
    gameState=End;
  }
}
   }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 

  

}

function mousePressed(){
  if(gameState!=="End"){
    Turn++;
    particle=new Particle(mouseX,100,10,10);
  }
}
