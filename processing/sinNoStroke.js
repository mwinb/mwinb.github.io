

function setup() {
    createCanvas(1250, 650);
    background(255);
    colorMode(HSB);
    var counter = 0;
}

function draw() {
    counter += 1;
    noStroke();
    fill(random(255),100,255,50);
        fill(random(255),100,255,50);
        ellipse(width/2, random(650), random(0,200)*cos(counter), random(0,300)*tan(counter));
        fill(random(255),100,255,50);
    
        ellipse(random(1250), height/2, random(0,200)*cos(counter), random(0,200)*sin(counter));
        fill(random(255),100,255,50);
    ellipse(width/3, height/2, random(0,200)*cos(counter), random(0,200)*tan(counter));
    fill(random(255),100,255,50);
    ellipse(800, height/2, random(0,200)*cos(counter), random(0,200)*tan(counter));
    if(counter>=200) {
    draw2();
    
};

function draw2() {
    counter += 1
    fill(random(255), 100, 255, 50);
    ellipse(width+(random(-40,-30)),height-=75, 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255), 100, 255, 50);
    ellipse(width-(random(1200,1210)), 75, 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255), 100, 255, 50);
    ellipse(width-(random(1200, 1210)), 575 , 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255), 100, 255, 50);
    ellipse(width+(random(-40, -30)), 575, 80*cos(counter), random(0,200)*sin(counter));
    
};
