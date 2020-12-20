class Paper{
    constructor(x, y, r){
``
        var Option={
            isStattic:false,
            restitution:0.3, 
            friction:0.5,
            density:1.2,
        }
      this.r=r
      this.image=loadImage("paper.png")
       this.body= Bodies.circle(x,y,r, Option)
       
        World.add(world,this.body)
    }

display(){
fill("white")
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.r, this.r)
}
}