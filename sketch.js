var ball={
  x: 200,
  y: 150,
  r: 50,
  x_speed: 2,
  y_speed: 5,
  color: ["red", "blue", "green", "yellow"],
}






function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r)
  fill(ball.color[2])
ball.x=ball.x-ball.x_speed
ball.y=ball.y+ball.y_speed
}