class Rubber{
constructor(){
  
    var options = {
        'restitution':0.3,
        'friction':5,
        'density':1, 
           
    }

    this.body = Bodies.circle(100,400,70,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);

}

display(fill1){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x , pos.y)
    ellipseMode(CENTER)
    strokeWeight(4)
    stroke("black")
    fill(fill1);
    ellipse( 0 , 0 ,70,70)
     pop;

}


}