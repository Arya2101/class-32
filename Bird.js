class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.PNG");
    this.smoke1 = [];
  }

  display() {

    super.display();
    if(this.body.velocity.x>20 && this.body.position.x>300){
      var pos = [this.body.position.x,this.body.position.y];
      this.smoke1.push(pos);  
    }
    for(var i = 0; i<this.smoke1.length; i++){
      image(this.image1,this.smoke1[i][0],this.smoke1[i][1]);
    }

  }
}
