class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = rgb(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
    this.visibility = 255;
  }
  display() {
    
    if (this.body.speed > 3) {
      World.remove(world, this.body);
      tint(255, this.visibility);
    } // else {

    //}

    if (this.body.speed < 3) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    } else {
      
      push();
      this.visibility = this.visibility - 5;
      World.remove(world, this.body);
      pop();
    }
  }
}
