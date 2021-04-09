var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


 


function preload( )
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	

	ground = new Ground(240,790,480,20);
 
	for(var k = 0; k<=width; k=k+80){
        divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
	}

	for(var j = 40; j <=width; j=j+50){
        plinkos.push(new Plinko(j,75));
	}
	for(var j = 15; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
	}
	for(var j = 15; j <=width-10; j=j+50){
        plinkos.push(new Plinko(j,275));
	}
	for(var j = 40; j <=width; j=j+50){
        plinkos.push(new Plinko(j,375));
	}




	

	
	 



 

	Engine.run(engine);
  
}

 
function draw() {
  background("black");
  Engine.update(engine);
  
  for(j=0;j<plinkos.length;j++){
       plinkos[j].display();
  }
  for(var k=0; k<divisions.length; k++){

	divisions[k].display();

  }
  if(frameCount%60===0){
	  particles.push(new Particles(random(width/2-10,width/2+10),10,10))

  }
  for(var h =0;h<particles.length;h++){
	  particles[h].display();

  }

  
  ground.display();
  
  
  
  drawSprites();
 
}


