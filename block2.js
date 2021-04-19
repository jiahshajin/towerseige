class Block2 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
     
     // rectMode(CENTER);
      
      //fill(134,205,233)
      
     // rect(pos.x, pos.y, this.width, this.height);
      
     // console.log(this.body.speed);
      if((this.body.speed)<3){
        var angle=this.body.angle
        var pos=this.body.position
        push() 
        translate(pos.x,pos.y)
        fill(134,205,233)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
      }
      else{
      World.remove(world, this. body)
        push()
  this.visibility=this.visibility-5
  tint(255,this.visibility);
  pop()
      }
      

    }
  }