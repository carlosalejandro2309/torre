class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,pointB:pointB,stiffness:0.4,length:1
        }
        
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
      }
      display(){
          if (this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            push();
          
            stroke(84,39,15);
            if (pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
           else 
           {
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }
        pop();
          }
          
   
      }
      fly(){
          this.chain.bodyA=null;
      }
     

}