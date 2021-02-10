function preload()
{
initial_img = loadImage('dog_cat.jpg');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
}
function draw()
{
image(initial_img ,0,0,400,300);
fill('#eb0000');
noFill();
stroke('#eb0000');
rect(50,40,150,250);
text("Doggy", 60,50);
}
