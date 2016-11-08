var cities, light, rowCount;

function preload() {
  traffic = loadTable("traffic.csv", "header")
  light = loadGif("images/for-gif2.gif")
}

function setup() {
  createCanvas(640, 480);

  rowCount = traffic.getRowCount();
  background(0);
  fill(255);
  noStroke();

}

function draw() {
  image(light, 100, 50, 800, 400);

  scale(390);

  translate(width/2-477.5, height/2+81.95);
  //console.log(mouseX);
  rotate(radians(270));

  for(var i = 0; i < rowCount; i++ ) {
    var latitude = traffic.getNum(i, "LATITUDE");
    var longitude = traffic.getNum(i, "LONGITUDE");
    setXY(latitude, longitude);
  }
}

function setXY(lat, lng) {
  // console.log(lat, lng);
  var x = map(lat, -90, 90, 0, height);
  var y = map(lng, -180, 180, 0, width);
  ellipse(x, y, 0.002);
}
