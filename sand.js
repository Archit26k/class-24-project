     class Sand{
        constructor( x , y){
    
            var options = {
                'restitution':1.3,
                'friction':5,
                'density':1, 
                
            }
        
            this.body = Bodies.circle(x , y ,20,options);
            this.width = width;
            this.height = height;
        
            World.add(world, this.body);
        
        }
        
           display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x , pos.y)
            ellipseMode(CENTER)
            strokeWeight(4)
            stroke("black")
            fill("brown");
            ellipse( 0 , 0 ,radius,20)
            pop;
        
        }
        
        
        }