const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);


    var ball_options ={
        restitution: 1
    }

    ball = Bodies.circle(200,200,15,ball_options);
    World.add(world,ball);

    var ball2_options = {
        restitution: 1
    }

    ball2 = Bodies.circle(190,150,15,ball2_options);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("red");
    circle(ball.position.x,ball.position.y,30);
    fill("blue");
    circle(ball2.position.x,ball2.position.y,30);

}