class Chain{
    constructor(bodyA, bodyB,offSetX,offSetY){
        this.offSetX=offSetX;
        this.offSetY=offSetY;
        
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.01,
      
           
        }
        this.sling = Matter.Constraint.create(options);
        
        World.add(world, this.sling);
    }

    display(){
         var pointA = this.sling.bodyA.position;
            var pointB =this.sling.bodyB.position;
            strokeWeight(4);
            var anchor1x=pointA.x
            var anchor1y=pointA.y
            var anchor2x=pointB.x+this.offSetX
            var anchor2y=pointB.y+this.offSetY
            line(anchor1x,anchor1y,anchor2x,anchor2y);
            
        
       
    
    
 }
 fly() {
this.chain.bodyA=null

 }
}
