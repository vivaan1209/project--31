class Plinko{
    constructor(x,y){
    
       var plinkoOptions = {
           isStatic: true,
           restitution: 0.3,
           friction: 0.5,
           density: 3    
       }
    
       this.x = x;
       this.y = y;
       this.r = 20;
       this.body = Bodies.circle(this.x,this.y,this.r/2,plinkoOptions);
      
       
       
    
       World.add(world,this.body);
    
    
    
    }
    
        display(){
    
        var plinkopos  = this.body.position;
        
         
        push();
        
        translate(plinkopos.x,plinkopos.y); 
        rectMode(CENTER); 
        strokeWeight(3); 
        fill("white"); 
        circle(0,0,this.r); 

        pop(); 
    
    }
    }