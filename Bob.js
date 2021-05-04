class Bob{
	constructor(x,y,r)
	{

	var options={restitution:0.3,friction:0,density:1.3,isStatic:false}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
	}
	display()
	{
			var bobpos=this.body.position;		
			push()
			translate(bobpos.x, bobpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
ellipse(0,0,this.r,this.r)
			pop()
	}

}