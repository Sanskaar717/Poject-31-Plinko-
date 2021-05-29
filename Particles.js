class Particles{
    constructor(x,y){
        var rest = {
            isStatic : false
        }

        this.body = Bodies.circle(x,y,10,rest);
        this.radius = 10;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}