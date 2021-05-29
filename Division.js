class Division {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.positon;
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}