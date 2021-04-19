 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var ground1;
var ground2;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var slingshot;
var polygonimg;

var ground
 
var backgroundImage 
 

var  bg = "images/light1.png"

function preload() {
  polygonimg=loadImage("polygon.png")  
  backgroundImage=loadImage("images/light.png")
  
   

  getBackgroundImage();

}



function setup() {
    createCanvas(1200,400);
    // rectMode(CENTER)
      
    createSprite(390,161,30,40)
 
     

    
   engine = Engine.create();
    world = engine.world;
    
   
   Engine.run(engine);

    
   ground= new Ground( 400,310,250,10);
   ground1= new Ground(800,224,210,10) ;
   ground2= new Ground(400,height-20,width,10);
    
     
  block2= new Block(359,201,30,40);
  block3=new Block(390,201,30,40)
  block4= new Block(421,201,30,40)
 block5= new Block1(330,242,30,40)
   block6 = new Block1(454,242,30,40)
   block7= new Block1(361,242,30,40)
   block8 = new Block1(392,242,30,40)
   block9 = new Block1(423,242,30,40)
   block10 = new Block2(299,283,30,40)
   block11 = new Block2(330,283,30,40)
 block12= new Block2(361,283,30,40)
   block13= new Block2(392,283,30,40)
   block14= new Block2(423,283,30,40)
   block15= new Block2(454,283,30,40)
block16= new Block2(485,283,30,40)
   block17= new Block1(795,118,30,40) 
   block18=new Block(763,158,30,40)
   block19=new Block(794,157,30,40)
   block20=new Block(825,157,30,40)
   block21=new Block2(853,197,30,40)
   block22=new Block2(732,197,30,40)
   block23=new Block2(732,197,30,40)
   block24=new Block2(762,197,30,40)
   block25=new Block2(792,197,30,40)
   block26=new Block2(822,197,30,40)
    
   polygon= Bodies.circle(50,200,20,{'restitution':0.8,'friction':0.5,'density':0.5});
   World.add(world,polygon)

   

  slingshot= new SlingShot(polygon,{x:100,y:200});

}
    
   
function draw(){ 
  if(backgroundImage)
  background(backgroundImage);

  
  drawSprites();

 ground.display()
 ground1.display()


  
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 block17.display()
 block18.display()
 block19.display()
 block20.display()
 block21.display()
 block22.display()
 block23.display()
 block24.display()
 block25.display()
 block26.display();
 ground2.display();

 slingshot.display()
 imageMode(CENTER)
   image(polygonimg,polygon.position.x,polygon.position.y,40,40)



}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon)
  }
}

async function getBackgroundImage(){
  var response= await fetch( " http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();
  console.log(responseJSON);
 console.log(hour) 
if(hour>=06 && hour<=18){
  bg= "images/light1.png";
}
else{
 bg="images/dark.jpg";
}
backgroundImage = loadImage(bg);
console.log(backgroundImage)
}
  

 