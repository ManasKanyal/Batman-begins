class Umbrella{

constructor(x,y){

var options = {

    'isStatic' : true

}

this.body = Bodies.circle(x,y,60,options);


this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");

World.add(world,this.body);


}

display(){

imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y + 134,500,500)


}

}