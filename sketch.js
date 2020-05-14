const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, plank, boxes;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    chain = new Chain(plank.body,object.body);
     
    plank= createsprite(600,210,100,20);
    object= createsprite(600,200,50,50);

    box1 = new box(600, 380, 20, 20);
    box2 = new box(640, 380, 20, 20);
    box3 = new box(680, 380, 20, 20);
    box4 = new box(620, 340, 20, 20);
    box5 = new box(660, 340, 20, 20);
    box6 = new box(640, 320, 20, 20);
    
    
    

}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
    }

}
 

function draw(){
    plank.display();
    object.display();
    chain.display();
    if (keypressed(space)){
        ball.fill (rand)
    }
}
