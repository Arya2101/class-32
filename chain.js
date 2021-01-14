class chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
        this.image1 = loadImage("sprites/1.png");
        this.image2 = loadImage("sprites/2.png");
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
    display(){
        if(this.chain.bodyA){
            var pA = this.chain.bodyA.position;
            var pB = this.pointB;
            push();
        stroke("#301608");
        strokeWeight(10);
        if(pA.x<250){
            line(pA.x-2,pA.y,pB.x,pB.y+15);
            line(pA.x-2,pA.y,pB.x+24,pB.y+15);
        }
        else{
            strokeWeight(0);
            line(pA.x-2,pA.y,pB.x,pB.y+15);
            line(pA.x-2,pA.y,pB.x+24,pB.y+15);
        }
      pop();      
     }
      image(this.image1,150,50);
      image(this.image2,160,40);  
   }
}
