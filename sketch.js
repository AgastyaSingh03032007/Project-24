const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,plane,rubber,iron,stone,s1,s6,s2,s3,s4,s5,s8,s7;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer=new Hammer(10,100);
	plane=new Plane(600,height,1200,20);
	rubber=new Rubber(900,450,70);
    iron=new Iron(300,350);
	stone=new Stone(700,320,100,100);

    s1=new Sand(500,450,10);
	s2=new Sand(510,450,10);
	s3=new Sand(520,450,10);
	s4=new Sand(530,450,10);
	s5=new Sand(540,450,10);
	s6=new Sand(550,450,10);
	s7=new Sand(560,450,10);
	s8=new Sand(570,450,10);
		
	Engine.run(engine);
  
}


function draw() {

	background("lightBlue");
    Engine.update(engine);
     hammer.display();
	 plane.display();
	 rubber.display();
	 iron.display();
	 stone.display();
	 s1.display();
	 s2.display();
	 s3.display();
	 s4.display();
	 s5.display();
	 s6.display();
	 s7.display();
	 s8.display();
 
}



