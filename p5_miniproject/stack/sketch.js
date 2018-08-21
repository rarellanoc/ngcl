var millones

var espacio;

var esp = 55;

var fonts_load = ['Georgia', 'Times', 'serif', 'Palatino', 'Times new roman', 'Garamond', 'Bookman']

var nombre = [, 'Segunda Concesión Ruta 66',
'Ruta 5 Tramo \nLos Vilos-La Serena', 
'Ruta G21, de acceso \na Farellones ',
'Embalse Catemu',
'380 Dptos en penco, Inmobiliaria \nFuentes de Piedra',
'Terreno 6.700 m2 Lira con \nSanta Isabel',
'Derechos de agua, \nlitro por segundo en Antofagasta',
'Implementación Ley uber (1 año)',
'784.531m2 banco de terrenos \n parque arauco',
'Central de Respaldo \nLlanos Blancos  150MW',
'Edificio corporativo en \nIsidora Goyenechea 3250',
'Edificio de 15 pisos \n CostaneraPuente Suecia',
'Planta de alimentos Agrosuper \n en La Estrella',
'aeropuerto El Tepual, de \nPuerto Montt',
'Hospital de Antofagasta',
'autopista urbana Américo \nVespucio Oriente (AVO) 9.1km',
'Fondo espejo transantiago',
'Casino de los Angeles + Hotel \n Casino de San antonio ',
'Puente Industrial Biobio',
'Loteo en Coronel, Inmobiliaria \nPocuro (910 viviendas)',
'Escuadrón Oriente 2, Coronel \n, 639 viviendas',
'Escuadrón Oriente 3 y 4 \n ( 412 viviendas)', 
'Pavimento en comunas del Biobio \n(65km)']



var fuente = [
'economiaynegocios.cl',
'economiaynegocios.cl',
'economiaynegocios.cl',
'economiaynegocios.cl',
'diarioconcepcion.cl',
'diarioeldia.cl',
'compragua.cl',
'cooperativa.cl',
'latercera.cl',
'radioagricultura.cl',
'economiaynegocios.cl',
'economiaynegocios.cl',
'economiaynegocios.cl',
'latercera.cl',
'latercera.cl',
'latercera.cl',
'elmercurio.cl',
'df.cl',
'diarioconcepcion.cl',
'diarioconcepcion.cl',
'diarioconcepcion.cl',
'diarioconcepcion.cl',
'soychile.cl'
]

var col2 = new Array();
var col3 = new Array();

var rot = new Array();

var rand_font = new Array();

var spa = 0;

var reveal = new Array();

function setup() {
  // put setup code here

  cnv = createCanvas(320, 2000);
  cnv.parent('centrado');

  //background(249, 254, 255);

  noStroke();


  millones = ['446624', '363446', '64605',  '311000','10556','20043','68','448','97826','46584','44190','19417','46869','25372','180279','614284','572886','4340','133540','28711','7628','13622','13000'];



	for(var i=0; i< millones.length ; i++) {

		col2[i] = ( random() * 3 )- 1
  		col3[i]= ( random() * 3 )- 1


  		rot[i]= ( random() * 4 )- 2

  		rand_font[i] = int(random(fonts_load.length));

      reveal[i] = 0;

}

   espacio = 0;
}

function draw() {
  // put drawing code here

     //console.log(espacio)

     translate(-50, 0);

   
   background(254, 254, 255);


if (spa >0 ) {
      spa = spa - 4;
    }

    //console.log(spa);


    for(var i=0; i< millones.length; i++) {



    	if ((mouseX > 10) && (mouseX < width -10)) {

      spa = esp;
  	 	if ((mouseY > (i*50) - 50) && (mouseY < ((i + 1)* 50 ) -50)) {



  			fill(25);

  			textSize(19)
  			text(nombre[i], 85 ,(i*50) + 9)


  			textSize(10)

  			if ( fuente[i -1 ] != undefined )  { 
  			text('fuente: '+ fuente[i-1],  230 ,(i*50) + 44)

  		}

  			espacio = i  


  	} else if ((mouseY > (millones.length * 50) - 50) ) {


  				if (i == millones.length - 1) {

		  			fill(25);

		  			textSize(19)

		  			text(nombre[millones.length], 85 ,(i*50) + 60)


		  			textSize(10)
  					text('fuente: '+ fuente[fuente.length - 1],  230 ,((fuente.length)*50) + 44)

		  			espacio = millones.length}


		  	}



  	}

  	
  	push();

  	

 	rotate(radians(int(rot[i])))

if (reveal[i] < 255) {
    
    reveal[i] =  reveal[i] + (round(millones.length/i) );

}

  	fill(255- int(col2[i]) * 8, 254 - int(col2[i]) * 10, 249 - int(col3[i]) * 13, reveal[i]);

 

  	rectMode(CENTER);


  	extension= millones[i].length * 10 
  	largo_fijo = 120

  	//console.log(extension)




  	if (i <= espacio) {


  		if (i == espacio) { 

  			rect(width/2, 20 + (i* 50) + spa, largo_fijo + extension + 30, 40 );

  		} else {

  			rect(width/2, 20 + (i* 50), largo_fijo + extension + 30, 40 );

  		}

  	

  } else {


  	
  	rect(width/2, 20 + (i* 50) + spa, largo_fijo + extension + 30, 40 );

  }




  	stroke(150, reveal[i])
  	fill(100 + col2[i]* 20, reveal[i]);
  	


  	

  	


  	textFont(fonts_load[rand_font[i]]);




  	textSize(24 - rand_font[i]);





  	if (i <= espacio) {

  		if (i == espacio) { 


  			text(millones[i] + ' millones' , (width/2) - (extension / 2) - largo_fijo / 2 + 8, 30 + (i* 50) + spa)

  		} else if (i == espacio - 1) {
  			fill(255, 100, 100);
  			
  			text(millones[i] + ' millones' , (width/2) - (extension / 2) - largo_fijo / 2 + 8, 30 + (i* 50)  )

  		} else {


  			text(millones[i] + ' millones' , (width/2) - (extension / 2) - largo_fijo / 2 + 8, 30 + (i* 50)  )
  		}

  } else {


  	text(millones[i] + ' millones' , (width/2) - (extension / 2) - largo_fijo / 2 + 8, 30 + (i* 50) + spa)
  }

  	pop()



  	 
  	



  	

  } // for



   

  
}