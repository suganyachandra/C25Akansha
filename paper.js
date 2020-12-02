class Ball{
    constructor(x,y,radius){
        var options={
            density:1.2,
            isStatic:false,
           // restitution:0.3,
            friction:0.5
        }
        //this.body = Bodies.rectangle(x,y,50,50,options);
        this.body=Bodies.circle(x,y,radius/2,options);
       //this.width = 50;
       // this.height = 50;
       this.r=radius
       this.image = loadImage("sprite/paper.png");
        World . add(world,this.body);
        this.r = 70;
        
    }
    display(){
       
        //fill("pink");
        //rect(this.body.position.x,this.body.position.y);
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        //ellipse(0,0,this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop()
    }
}



