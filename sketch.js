var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite,reciever1,reciever1Sprite,reciever2,reciever2Sprite,reciever3,reciever3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	reciever1Sprite = createSprite(400,650,200,20);
	reciever1Sprite.shapeColor = color(255,0,0);
	//reciever1Sprite.debug  = true;

	reciever2Sprite = createSprite(290,610,20,100);
	reciever2Sprite.shapeColor = color(0,255,0);

	reciever3Sprite = createSprite(510,610,20,100);
	reciever3Sprite.shapeColor = color(0,255,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
    reciever1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,reciever1);
	
	reciever2 = Bodies.rectangle(290,610,20,100,{isStatic:true});
	World.add(world,reciever2);
	
	reciever3 = Bodies.rectangle(510,610,20,100,{isStatic:true});
    World.add(world,reciever3);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  reciever1Sprite.x= reciever1.position.x ;
  reciever1Sprite.y= reciever1.position.y ;

  reciever2Sprite.x= reciever2.position.x ;
  reciever2Sprite.y= reciever2.position.y ;

  reciever3Sprite.x= reciever3.position.x ;
  reciever3Sprite.y= reciever3.position.y ;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}