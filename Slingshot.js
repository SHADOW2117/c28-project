class SlingShot {
  constructor(bodyA,pointB) {
    var options = {
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 0.04,
       length: 10
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
  
  display(){
    
      push();
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    stroke("red");
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
    
  }
}