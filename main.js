function setup() {
    canvas = createCanvas(405, 405);
    console.log({canvas});
     document.getElementById('canvasDiv').append(canvas.elt);
    // console.log(window.innerWidth, window.innerHeight);
    // canvas.position(window.innerWidth + 200,window.innerHeight + 200);  
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    // background(220);
    stroke(0,0,0);
    fill(0,0,0);
    rect(30,30,350,20);
    rect(30,30,20,350);
    rect(360,30,20,370);
    rect(30,360,370,20);
    
    image(video,50,50,310,310)
    
    stroke(255,0,0);
    fill(255,0,0);
    circle(0,0,200)  
    stroke(255,150,0);
    fill(255,150,0);
    circle(0,0,150)
    stroke(255,255,0);
    fill(255,255,0);
    circle(0,0,100)
    
    
    stroke(255,0,0);
    fill(255,0,0);
    circle(400,400,200)
    stroke(255,150,0);
    fill(255,150,0);
    circle(400,400,150)
    stroke(255,255,0);
    fill(255,255,0);
    circle(400,400,100)
    
  }

  function takeSnap() {
    save('canvasPhoto.png')
  }