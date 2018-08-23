var img;

var cnv;
function preload() {
  img = loadImage('ng_image.002.jpeg');
}

function setup() {
  // put setup code here
  cnv = createCanvas(windowWidth, windowHeight);



  cnv.parent('p5sketch');
  background(30,30,30);

  console.log('loads');
  image(img, 0, 0);

  ;
  noFill();

  
  var last = 'abajo'

 var a = 0;
 var d = 0;

    

    var cant1 = int(random(10)) + 2;

    

    for (var i=0; i<cant1 ;i++) {


    	
    	stroke(244,164,96);
    	ellipse(800 - cant1 * 4,200 + (10 * i), 100, 40);

    }
 	
 	var cant2 = int(random(5)) + 2;

    

    for (var i=0; i<cant2 ;i++) {


    	
    	stroke(244,164,96);
    	ellipse(660 + (cant2 * 3),120  + (10 * i), 100, 40);

    }



    var cant3 = int(random(2)) + 2;

    

    for (var i=0; i<cant2 ;i++) {


    	
    	stroke(244,164,96);
    	ellipse(560 + (cant3 * 3),160  + (10 * i), 100, 40);

    }

  for (var i=0; i<16;i++) {

  	// abajo

  	numero = int(random(9))

  	if (int(random(2)) == 0) {

  			if (last == 'abajo') {

  				node(100 + (70 * d),60 + (70 *a), 'abajo', numero);

  			} else {

  				node(100 + (70 * d),60 + (70 * a), 'abajo', numero);
  			}
  			last = 'abajo';
  			a = a + 1;

  	//derecha
	} else {

			if (last == 'abajo') {

				node(100 + (70 * d),60 + (70 * a), 'der', numero);

			} else {

				node(100 + (70 * d),60 + (70 * a), 'der', numero);
			} 
			last = 'der';

			d = d + 1;
	}


	}//fo;r

}

function draw() {
  // put drawing code here
}


function node( originx, originy, direccion, valor) {



stroke(255)
  ellipse(originx,originy,40,40)

  if (direccion == 'abajo') {

  line(originx,originy + 20,originx, originy +50);

} else if (direccion == 'der') {

	line(originx + 20,originy,originx + 50, originy);

}

   textSize(20);
  textFont('Courier New');

  stroke(244,164,96);
	text(valor, originx -5 , originy + 5);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
}