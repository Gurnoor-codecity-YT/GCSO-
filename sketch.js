  var bmwimg,dodgeimg,teslaimg,fordimg,wallimg;
  var deformation1, deformation2, deformation3, deformation4; 
  var speed1,speed2,speed3,speed4 ,weight;
  var b1, b2, b3, b4
   function preload (){
 bmwimg= loadImage("BMW-M8-Coupe-2.png")
  dodgeimg=loadImage("dodge-demon-srt.png")
  fordimg=loadImage("ford-gt-2019.png")
 teslaimg =loadImage("TESLA MODLE S.png")
 wallimg= loadImage("wall-img.png")
   }

function setup() {

 

  createCanvas(1700,1800);
  speed1 = random(-55, -90);
  speed2 = random(-55, -90);
  speed3 = random(-55, -90);
  speed4 = random(-55, -90);
  weight = random(400, 1500);

  dodge = createSprite(850, 50, 200, 20);
  dodge.addImage(dodgeimg)
dodge.scale=0.6

  bmw = createSprite(850, 155, 200, 50);
 bmw.addImage(bmwimg)
 bmw.scale=0.3
 
 tesla= createSprite(850, 280, 50, 50);
tesla.addImage(teslaimg)
tesla.scale =0.3

 ford= createSprite(850, 385, 50, 50);
 ford.addImage(fordimg);
 ford.scale=0.6

  b1 = createSprite(1000, 50, 100, 50);
  b1.shapeColor = "violet";
  b2 = createSprite(1000, 150, 100, 50);
  b2.shapeColor = "yellow";
  b3 = createSprite(1000, 260, 100, 50);
  b3.shapeColor = "red";
  b4 = createSprite(1000, 385, 100, 50);
  b4.shapeColor = "cyan" ;

  wall = createSprite(10, 155, 70, 10000);
  //wall.addImage(wallimg);

  deformation1 = Math.round(0.5 * 2170 * Math.round(speed1) * Math.round(speed1) / 22500);
  deformation2 = Math.round(0.5 * 1550 * Math.round(speed2) * Math.round(speed2) / 22500);
  deformation3 = Math.round(0.5 * 1800 * Math.round(speed3) * Math.round(speed3) / 22500);
  deformation4 = Math.round(0.5 * 615 * Math.round(speed4) * Math.round(speed4) / 22500);
}

function draw() {
  background(255,255,255); 
 
  fill(0);
  noStroke();
  textSize(32);
  text("Test",1100,60);
  text("Test",1100,160); 
  text("Test",1100,270); 
  text("Test",1100,395);
  b2.depth=text.depth;

  fill(255);
  stroke("blue");
  strokeWeight(5);
  textSize(40);
  text("Car Name", 100, 500);
  text("Weight (in Kg)", 500, 500);
  text("Speed", 925, 500);
  text("Deformation", 1250, 500);

  noStroke();
  fill(255);
  rect(0, 87, 1470, 5);
  rect(0, 198, 1470, 5);
  rect(0, 330, 1470, 5);
  rect(0, 450, 1600, 5);
  rect(0, 550, 1600, 5);
  rect(0, 600, 1600, 5);
  rect(0, 650, 1600, 5);
  rect(0, 700, 1600, 5)

  if (mousePressedOver(b1)) {
    dodge.velocityX = speed1;
  }

  if (mousePressedOver(b2)) {
    bmw.velocityX = speed2;
  }

  if (mousePressedOver(b3)) {
    tesla.velocityX = speed3;
  }

  if (mousePressedOver(b4)) {
    ford.velocityX = speed4;
  }


  if (dodge.x + 180 - wall.x < dodge.width / 2 + wall.width / 2
    && wall.x - dodge.x + 180 < dodge.width / 2 + wall.width / 2
    && dodge.y - wall.y < dodge.height / 2 + wall.height / 2
    && wall.y - dodge.y < dodge.height / 2 + wall.height / 2) {

  dodge.velocityX = 0;

    fill("black");
    text("dodgd ", 100, 650);
    text("1800", 530, 650);
    text(Math.round(speed1), 930, 650);
    text(deformation1, 1350, 650)

  }

  if (bmw .x + 235 - wall.x < bmw.width / 2 + wall.width / 2
    && wall.x - bmw.x + 235 < bmw.width / 2 + wall.width / 2
    &&bmw.y - wall.y < bmw.height / 2 + wall.height / 2
    && wall.y - bmw.y < bmw.height / 2 + wall.height / 2) {

    bmw.velocityX = 0;

    fill("black");
    text("bmw", 130, 737);
    text("615", 530, 737);
    text(Math.round(speed2), 930, 737);
    text(deformation2, 1350, 737);

    if (ford.x + 145 - wall.x <ford.width / 2 + wall.width / 2
      && wall.x - ford.x + 145 < ford.width / 2 + wall.width / 2
      && ford.y - wall.y < ford.height / 2 + wall.height / 2
      && wall.y - ford.y < ford.height / 2 + wall.height / 2) {
  
      ford.velocityX = 0;

      fill("black");
      text("FORD", 130, 587);
      text(2170, 530, 587);
      text(Math.round(speed3), 930, 587);
      text(deformation3, 1350, 587)
  
    }
  
    if (tesla.x + 230 - wall.x < tesla.width / 2 + wall.width / 2
      && wall.x - tesla.x + 230 < tesla.width / 2 + wall.width / 2
      && tesla.y - wall.y < tesla.height / 2 + wall.height 
      && wall.y - tesla.y < tesla.height / 2 + wall.height / 2) {
  
      tesla.velocityX = 0;
  
      fill("black");
      text("tesla ", 130, 637);
      text(1550, 530, 637);
      text(Math.round(speed4), 930, 637);
      text(deformation4, 1350, 637)

     
    }
  }


  

  drawSprites();} 