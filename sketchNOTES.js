var traffic; //traffic signals
var rowCount;

function preload(){
  traffic = loadTable("traffic.csv", "header")
}

function setup(){
  createCanvas(640, 480);

  var rowCount = traffic.getRowCount();
  //console.log(rowCount);

  //background(map(rowCount, 0, 3000, 0, 255)); //change numbers
  background(0);
  fill('white');
  noStroke();
}

function draw(){
  //scale(2);
  translate(width/2, height/2);
  for(var i = 0; i < rowCount; i++){
      var latitude = traffic.getNum(i, "LATITUDE");
      var longitude = traffic.getNum(i, "LONGITUDE");
      //console.log(latitude, longitude);
      setXY(latitude, longitude);
  }
}

function setXY(lat, lng){
  //println(lat, lng);
  var x = map(lat, 30, 31, 0, height);
  var y = map(lng, -90, -92, 0, width);
  ellipse(x, y, 50);
}
