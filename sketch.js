var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	box1Sprite = createSprite(400,650,200,20);
	box1Sprite.shapeColor = "red";

	box2Sprite = createSprite(310,610,20,100);
	box2Sprite.shapeColor = "red";

	box3Sprite = createSprite(490,610,20,100);
	box3Sprite.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200, 5 , {isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(400,635,200,20,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(310,595,20,100,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(490,595,20,100,{isStatic:true});
	World.add(world,box3);
	 
	//box1 = new box(400,650,200,20);
	//box2 = new box(310,610,20,100);
	//box3 = new box(490,610,20,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  if(keyDown(DOWN_ARROW)){
	  Matter.Body.setStatic(packageBody, false);
  }

  ellipse(packageBody.position.x, packageBody.position.y, 5, 5, {restitution:0.5, isStatic:false});

  drawSprites();
}


