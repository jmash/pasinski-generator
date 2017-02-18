function setup() {
  // STUFF THAT IS SAFE TO CHANGE
  var cw=800; // this is the canvas width.
  var ch=800; // this is the canvas height
  var tw=20;  // this is the width of each individual triangle
  var th=20;  // this is the height of each individual triangle
  var rows=32;// this is how many rows the pattern has
  var fillOdd = [0, 0, 0];          // this sets the fill of all odd-numbered triangles
                                    // the parameters are [red, green, blue].
  var strokeOdd = [0, 0, 0];        // this sets the stroke of all odd-numbered triangles
                                    // the parameters are [red, green, blue].
  var fillEven = [255, 255, 255];   // this sets the fill of all even-numbered triangles
                                    // the parameters are [red, green, blue].
  var strokeEven = [-1, 0, 0];      // this sets the stroke of all even-numbered triangles
                                    // the parameters are [red, green, blue].
                                    // FOR BOTH EVEN OR ODD STROKES, SET FIRST PARAMETER TO -1
                                    // IF YOU WOULD PREFER NO STROKE
  
  // STUFF YOU SHOULD AVOID CHANGING
  var m = cw/2;  // this is half the canvas width (used within the algorithm, you can ignore this)
  var tm = tw/2; // this is half the width of each individual triangle (you can ignore this)
  var pascalLines = pascalLines(rows);// this generates the Pascal pattern for the number of rows specified 
  createCanvas(cw,ch); // this creates the canvas
  background(255); // this sets the background to white. 
  
  for (var i = 1; i <= rows; i++) {
    for (var j = 0; j < i; j++) {
      if (pascalLines[i-1][j] % 2 !== 0) { 
        fill(fillOdd[0], fillOdd[1], fillOdd[2]);
        if (strokeOdd[0] === -1) { noStroke(); }
        else { stroke(strokeOdd[0], strokeOdd[1], strokeOdd[2]); }
      } else {
        fill(fillEven[0], fillEven[1], fillEven[2], fillEven[3]); 
        if (strokeEven[0] === -1) { noStroke(); }
        else { stroke(strokeEven[0], strokeEven[1], strokeEven[2]); }
      }
      // this is the algorithm that took me forever to figure out. I can go into detail
      // about it if you want me to, but otherwise it's safe to just ignore it.
      // modify at your own risk :)
      triangle(m-tm*(-i+2*j), th*i, m-tm*(-i+2*j+2), th*i, m-tm*(-i+2*j+1), th*i-th);
    }
  }
  
  save("pasinski.png"); // this automagically saves the image as a PNG file. It will either
                        // download to your Downloads folder, or to the folder that appears when
                        // you press Ctrl-K. Check both if you're not sure where it got to.
  
  // all this does is create Pascal's triangle within a 2D array and returns it.
  // feel free to ignore this.
  function pascalLines(n) {
  if (n < 1) return false;
  var triangle = new Array();
  for (var r = 0; r < n; r++) {
    triangle[r] = new Array();
    for (var i = 0; i <= r; i++) {
      if (i == 0 || i == r)
        triangle[r][i] = 1;
      else
        triangle[r][i] = triangle[r-1][i-1]+triangle[r-1][i];
    }
  }
  return triangle;
  }
}

// if the triangle were animated, this would serve a purpose. It isn't, so it doesn't :)
function draw() {
  
}