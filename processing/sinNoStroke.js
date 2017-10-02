var counter = 0;

function setup() {
    createCanvas(1250, 650);
    background(255,255,255,100);
   
}

function draw() {
    counter += 1;
    noStroke()
    fill(random(255),random(200),random(255),random(200));
    fill(random(255),random(200),random(255),random(200));
    ellipse(width/2, random(650), random(0,200)*cos(counter), random(0,300)*tan(counter));

    fill(random(255),random(200),random(255),random(200));
    ellipse(random(1250), height/2, random(0,200)*cos(counter), random(0,200)*sin(counter));
    if(counter>=200) {
    draw2();
    }
    
};

function draw2() {
    counter += 1
    noStroke()
    fill(random(255),random(200),random(255),random(200));
    ellipse(1200, 75, 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255),random(200),random(255),random(200));
    ellipse(50, 75, 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255),random(200),random(255),random(200));
    ellipse(50, 575 , 80*cos(counter), random(0,200)*sin(counter));

    fill(random(255),random(200),random(255),random(200));
    ellipse(1200, 574, 80*cos(counter), random(0,200)*sin(counter));
   
};

function mousePressed() {
	  clear();
}
