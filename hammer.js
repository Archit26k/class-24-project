class Hammer{
constructor(x,y){
    var option ={
    'density':2.0,
    'friction':1.0,
    'restitution':0.5,
    }
    this.body = Bodies.rectangle(x,y,40,100,option)
    this.height = 40;
    this.width = 100;
    World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    pos.x =mouseX;
    pos.y= mouseY; 
    var angle = this.body
    push();
    translate(pos.x , pos.y)
    rotate(angle)
  
    
    strokeWeight(4)
    stroke("white")
    fill(300,200,0);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  
}


}