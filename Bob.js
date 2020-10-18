class bob{
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 70;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        strokeWeight(4); 
        stroke("pink"); 
        fill("pink"); 
        ellipseMode(CENTER); 
        ellipse(this.x,this.y,this.radiusX,this.radiusY); 
        pop();
      }
}