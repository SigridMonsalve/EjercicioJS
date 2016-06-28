/*PC2-Ejercicios: Condicionales simples y condicionales múltiples*/
	function aprobacion(){
		notaUno=parseInt(prompt('Ingrese primera nota. (Entre 1 y 10)'));
		notaDos=parseInt(prompt('Ingrese primera nota. (Entre 1 y 10)'));
		notaTres=parseInt(prompt('Ingrese primera nota. (Entre 1 y 10)'));
		promedio=(notaUno+notaDos+notaTres)/3;
		if (promedio>=6){
			alert('¡Has aprobado!');
		}
		else{
			alert('Has reprobado. ¡Ánimo para la próxima!')
		}
	}
	function comparacion(){
		primerNumero=parseInt(prompt('Ingrese el primer número a comparar:'));
		segundoNumero=parseInt(prompt('Ingrese el segundo número a comparar:'));
		if (primerNumero>segundoNumero){
			alert('El primer número ('+primerNumero+') es mayor. '+primerNumero+'>'+segundoNumero);
		}
		else if (primerNumero==segundoNumero){
			alert('Los números son iguales. ('+primerNumero+'='+segundoNumero);
		}
		else{
			alert('El segundo número ('+segundoNumero+') es mayor. '+segundoNumero+'>'+primerNumero);
		}
	}
	function positivismo(){
		entero=parseInt(prompt('Ingrese un número negativo o positivo.'));
		if(entero>0){
			alert(entero+' es un número positivo.')
		}
		else if (entero<0){
			alert(entero+' es un número negativo.')
		}
		else{
			alert('El número ingresado es 0')
		}
	}
	function descuento(){
		precio=parseInt(prompt('Ingrese precio del traje:'));
		if (precio>=2500){
			alert('El descuento de tu traje es 15% ('+precio*0.15+')\n y el total a pagar: '+precio*0.85);
		}
		else{
			alert('El descuento de tu traje es 8% ('+precio*0.08+')\n y el total a pagar: '+precio*0.92);
		}
	}
	function mayordeTres(){
		numeroUno=parseInt(prompt('Ingrese primer número a comparar:'));
		numeroDos=parseInt(prompt('Ingrese segundo número a comparar:'));
		numeroTres=parseInt(prompt('Ingrese tercer número a comparar:'));
		if(numeroUno>=numeroDos && numeroUno>=numeroTres){
			alert('Entre '+numeroUno+', '+numeroDos+', '+numeroTres+' es '+numeroUno);
		}
		else if(numeroDos>=numeroUno && numeroDos>=numeroTres){
			alert('Entre '+numeroUno+', '+numeroDos+', '+numeroTres+' es '+numeroDos);
		}
		else if(numeroTres>=numeroDos && numeroUno<=numeroTres){
			alert('Entre '+numeroUno+', '+numeroDos+', '+numeroTres+' es '+numeroTres);
		}
		else{
			alert('Los números '+numeroUno+', '+numeroDos+', '+numeroTres+' son iguales. ');
		}
	}
	function presupuestar(){
		personas=parseInt(prompt('Ingrese la cantidad de personas que\nasistirán al banquete.'));
		if(personas>300){
			alert('El precio por persona es $75.00. \nPara '+personas+' personas su presupuesto es: $'+personas*75+'.00')
		}
		else if(personas>200 && personas<=300){
			alert('El precio por persona es $85.00. \nPara '+personas+' personas su presupuesto es: $'+personas*85+'.00');
		}
		else{
			alert('El precio por persona es $95.00. \nPara '+personas+' personas su presupuesto es: $'+personas*95+'.00');
		}
	}	
	function cuantoPagar(){
		alumnos=parseInt(prompt('Ingrese la cantidad de alumnos que viajarán:'));
		if(alumnos>=100){
			alert('Cada alumno debe pagar $65.00\ny el total a pagar es '+alumnos*65+'.00');
		}
		else if(alumnos>=50 && alumnos<=99){
			alert('Cada alumno debe pagar $65.00\ny el total a pagar es '+alumnos*70+'.00');
		}
		else if(alumnos>=30 && alumnos<=49){
			alert('Cada alumno debe pagar $65.00\ny el total a pagar es '+alumnos*95+'.00');
		}
		else{
			alert('Cada alumno debe pagar $'+4000/alumnos+'.00\ny el total a pagar es $4000.00');
		}
	}
	function costos(){
		busA=2.0;
		busB=2.5;
		busC=3.0;
		personas=20;

	}
	function gastoFabricacion(){

	}
	function pagoHamburguesa(){
		sencilla=20.00;
		doble=25.00;
		triple=28.00;
		do{
			tipoHamburguesa=prompt('Tipo de hamburguesa: \nsencilla, doble o triple.');
			tipoHamburguesa=tipoHamburguesa.toLowerCase();
		}
		while (tipoHamburguesa!=='sencilla' && tipoHamburguesa!=='doble' && tipoHamburguesa!=='triple');
		cantidad=parseInt(prompt('¿Cuántas hamburguesas desea?'));
		tipoPago=prompt('Medio de pago: crédito o efectivo');
		tipoPago=tipoPago.toLowerCase();
		if(tipoHamburguesa==='sencilla'){
			total=cantidad*sencilla;
		}
		else if(tipoHamburguesa==='doble'){
			total=cantidad*doble;
		}
		else{
			total=cantidad*triple;
		}
		if(tipoPago==='credito' || tipoPago==='crédito'){
			total=total+total*0.05;
			alert('El total a pagar por '+cantidad+' '+tipoHamburguesa+' es '+total);
			}
		else{
			alert('El total a pagar por '+cantidad+' '+tipoHamburguesa+' es '+total);
		}
	}
	function gastoFabricacion(){
		/*arcticuloUno=;
		articuloDos=;
		articuloTres=;
		articuloCuatro=;
		articuloCinco=;
		articuloSeis=;
		costo=mPrima+mObra+fGastos;
		claveObj=prompt('Ingrese clave de objeto a producir (1, 2, 3, 4, 5 o 6');
		if(claveObj==='1' && claveObj==='5'){

		}
		else if(claveObj==='3' || claveObj==='4')
	*/
	}
/*PC2-Ejercicios: Condicionales simples y condicionales múltiples*/
/*PC3-Ejercicios: Estructuras repetitivas For, While, do While*/
	function while10numeros(){
		var suma;
		var total=0;
		var i=1;
		while(i<=10){
			suma=parseInt(prompt('Ingrese número a sumar:'));
			total=total+suma;
			i++;
		}
		alert('El total sumado es '+total);
	}
	function do10numeros(){
		var suma;
		var total=0;
		var i=1;
		do{
			suma=parseInt(prompt('Ingrese número a sumar:'));
			total=total+suma;
			i++;
		}
		while(i<=10)
		alert('El total sumado es '+total);
	}
	function for10numeros(){
		var suma;
		var total=0;
		for(i=1;i<=10;i++){
			suma=parseInt(prompt('Ingrese número a sumar:'));
			total=total+suma;
		}
		alert('El total sumado es '+total);
	}
	function edadPromedio(){
		var sumaEdades=0;
		var edades;
		var alumnos;
		var promedio;
		alumnos=parseInt(prompt('Ingrese cantidad de alumnos a promediar:'));
		for(i=1;i<=alumnos;i++){
			edades=parseInt(prompt('Ingrese edad del alumno '+i+' :'));
			sumaEdades=sumaEdades+edades;
		}
		promedio=sumaEdades/alumnos;
		alert('La edad promedio entre '+alumnos+' estudiantes es: '+promedio);
	}
	function pares(){
		var totalPares;
		totalPares=[];
		for (i=0;i<=100;i++){
			if(i%2===0){
				totalPares.push(i);
			}
		}
		alert('Los pares entre 0 y 100 son: '+totalPares);
	}
	function ternas(){

	}
	function tablas(){
		var tablaDe;
		var tablaCompleta;
		tablaCompleta=[];
		tablaDe=parseInt(prompt('¿De qué número será la tabla?'));
		for (i=0;i<=12;i++){
			tablaCompleta.push('\n'+tablaDe+'x'+i+'='+tablaDe*i);
		}
		alert(tablaCompleta);
	}
	function elevar(){

	}
	function promedio40(){
		var alumnos=40;
		var notaAlumno;
		var sumaNotas;
		var promedio;
		var notaMinima;
		sumaNotas=0;
		for(i=1;i<=alumnos;i++){
			notaAlumno=parseInt(prompt('Ingrese nota de alumno '+i));
			sumaNotas=sumaNotas+notaAlumno;
		}
		promedio=sumaNotas/alumnos;
		alert('El promedio es '+promedio+' y la nota más baja es '+notaMinima);
	}
	function cuboycuarta(){
		var resultados;
		var base;
		resultados=[];
		for(i=1;i<=10;i++){
			base=parseInt(prompt('Ingrese la base '+i+' a elevar:'));
			resultados.push('\nBase: '+base+'. Cubo: '+Math.pow(base,3)+'. Cuarta: '+Math.pow(base,4));
		}
		alert(resultados);
	}
/*PC3-Ejercicios: Estructuras repetitivas For, While, do While*/
/*PC4-Ejercicios prácticos pseudocódigo*/

/*PC4-Ejercicios prácticos pseudocódigo*/
/*JS1-Ejercicios: Tipos de datos, variables y operadores*/
	function division(){
		do{
			primerNumero=prompt('Ingrese el número que será dividido.');
			if(isNaN(primerNumero)){
				alert(primerNumero+' no es un número.');
			}
		}
		while (isNaN(primerNumero));
		do{
			segundoNumero=prompt('Ingrese el número que dividirá.');
			if(isNaN(segundoNumero)){
				alert(segundoNumero+' no es un número.');
			}
		}
		while (isNaN(segundoNumero));
		alert('El resultado de la división '+primerNumero+'/'+segundoNumero+' es '+parseInt(primerNumero)/parseInt(segundoNumero));
	}
	function conversionEdad(){
		nombre=prompt('Ingresa tu nombre:');
		do{
			edad=prompt('Ingresa tu edad:');
		}
		while (isNaN(edad));
		alert(nombre+', tus '+edad+' años corresponden a '+parseInt(edad)*365+' días.');
	}
	function output(){
		nombre=prompt('Ingrese su nombre:');
		apellido=prompt('Ingrese su primer apellido:');
		poblacion=prompt('Ingrese dónde habita:');
		alert('=======================\nHola, '+nombre+' '+apellido+'\nAdiós, habitante de '+poblacion+'\n=======================');
	}
	function contadores(){
		numero=parseInt(prompt('Ingrese un número:'));
		contadorUno=numero+5;
		contadorDos=contadorUno+21;
		contadorTres=contadorDos-4;
		alert('Número introducido: '+numero+'\n'+'Contadores:\t '+'\t'+contadorUno+'\t'+contadorDos+'\t'+contadorTres);
	}
	function escalar(){
		vectorUnoX=parseInt(prompt('Primer vector: (x,y)\nIngrese el valor de "x"'));
		vectorUnoY=parseInt(prompt('Primer vector: (x,y)\nIngrese el valor de "y"'));
		vectorDosX=parseInt(prompt('Segundo vector: (x,y)\nIngrese el valor de "x"'));
		vectorDosY=parseInt(prompt('Segundo vector: (x,y)\nIngrese el valor de "y"'));
		producto=(vectorUnoX*vectorDosX)+(vectorUnoY*vectorDosY);
		alert('El producto escalar de los vectores:\n('+vectorUnoX+','+vectorUnoY+') y ('+vectorDosX+','+vectorDosY+') es '+producto);
	}
	function puntoMedio(){
		coorUnoX=parseInt(prompt('Primera coordenada: (x,y)\nIngrese el valor de "x"'));
		coorUnoY=parseInt(prompt('Primera coordenada: (x,y)\nIngrese el valor de "y"'));
		coorDosX=parseInt(prompt('Segunda coordenada: (x,y)\nIngrese el valor de "x"'));
		coorDosY=parseInt(prompt('Segunda coordenada: (x,y)\nIngrese el valor de "y"'));
		resultadoX=(coorUnoX+coorDosX)/2;
		resultadoY=(coorDosY+coorUnoY)/2;
		alert('El punto medio del segmento\nde extremos, puntos:\n('+coorUnoX+','+coorUnoY+') y ('+coorDosX+','+coorDosY+') es ('+resultadoX+','+resultadoY+')');
	}
	function areaCircle(){
		radio=parseInt(prompt('Ingrese el radio de la circunferencia:'));
		pi=3.14;
		alert('El área de una circunferencia\nde radio '+radio+' es '+(pi*Math.pow(radio,2)));
	}
	function areaTriangle(){
	}
	function determinante(){
		detA1=parseInt(prompt('Formato matriz:\n\nA=\t|A1 A2|\n \t|B1 B2|\n\nIngrese A1'));
		detA2=parseInt(prompt('Formato matriz:\n\nA=\t|A1 A2|\n \t|B1 B2|\n\nIngrese A2'));
		detB1=parseInt(prompt('Formato matriz:\n\nA=\t|A1 A2|\n \t|B1 B2|\n\nIngrese B1'));
		detB2=parseInt(prompt('Formato matriz:\n\nA=\t|A1 A2|\n \t|B1 B2|\n\nIngrese B2'));
		determinante=(detA1*detB2)-(detA2*detB1);
		alert('El determinante de la matriz\n\nA=\t|'+detA1+' '+detA2+'|\n \t|'+detB1+' '+detB2+'|\n\n es '+determinante);
	}
/*JS1-Ejercicios: Tipos de datos, variables y operadores*/
/*JS2-Ejercicios: Estructuras condicionales y repetitivas en JS*/
	function completar(){
		var numero1 = 5;
		var numero2 = 8;
		if(numero1<numero2) {
			alert("numero1 no es mayor que numero2");
		}
		if(numero2>0){
			alert("numero2 es positivo");
		}
		if(numero1<0){
			alert("numero1 es negativo o distinto de cero");
		}
		if((numero1+1)<=numero2){
			alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
		}
	}
	function factorial(){
		var numero;
		var mensaje;
		var total;
		mensaje='';
		total=1;
		numero=parseInt(prompt('Ingrese número:'));
		for (i=numero;i>=1;i--){
			total=total*i;
			mensaje=mensaje+i+'x';
		}
		alert(numero+'!='+mensaje+' '+'='+total);
	}
	function operar(){
		var numero1;
		var numero2;
		numero1=parseInt(prompt('Ingrese N°1:'));
		numero2=parseInt(prompt('Ingrese N°2:'));
		if(numero1>numero2){
			alert('Suma: '+numero1*numero2+'\nResta: '+numero1/numero2);
		}
		else if(numero1===numero2){
			alert('Ambos números son iguales.');
		}
		else{
			alert('Multiplicación: '+numero1*numero2+'\nDivisión: '+numero1/numero2);
		}
	}
	var sumaTotal=0;
	function saldoBancario(){
		var numeroCuenta=parseInt(prompt('Ingrese número de cuenta'));
		var nombreCliente=prompt('Nombre del titular:');
		var saldo=parseInt(prompt('Ingrese saldo actual:'));
		var estado;
		if(saldo>0){
			estado='Acreedor';
			sumaTotal=sumaTotal+saldo;
		}
		else if(saldo<0){
			estado='Deudor';
		}
		else{
			estado='Nulo';
		}

		alert('Cliente: '+nombreCliente+'\nN° Cuenta: '+numeroCuenta+'\nSaldo: '+saldo+'\nEstado de cuenta: '+estado+'\nSuma total acreedores: '+sumaTotal);

	}
	function repetir(){
		var mensaje="";
		texto=prompt('Ingrese texto a repetir:');
		cantidad=parseInt(prompt('Ingrese cantidad de veces que se repetirá:'));
		for(i=cantidad;i>=1;i--){
			mensaje=mensaje+'\n'+texto;
		}
		alert(mensaje);
	}
	function multiplos11(){
		var multiplos;
		multiplos='';
		for(i=1;i*11<=3000;i++){
			multiplos=multiplos+(i*11)+', ';
		}
		alert('Los múltiplos de 11 son:\n'+multiplos);
	}
	function listas(){
		var lista1=[];
		var lista2=[];
		var suma1;
		var suma2;
		var suma=0;
		lista1.push(parseInt(prompt('Lista 1, valor 1:')));
		lista1.push(parseInt(prompt('Lista 1, valor 2:')));
		lista1.push(parseInt(prompt('Lista 1, valor 3:')));
		lista2.push(parseInt(prompt('Lista 2, valor 1:')));
		lista2.push(parseInt(prompt('Lista 2, valor 2:')));
		lista2.push(parseInt(prompt('Lista 2, valor 3:')));
		function sumar(item){
			suma+=item;
		}
		lista1.forEach(sumar);
		suma1=suma;
		suma=0;
		lista2.forEach(sumar);
		suma2=suma;
		if (suma1>suma2){
			alert('Lista 1 es mayor que Lista 2');
		}
		else if (suma2>suma1){
			alert('Lista 2 es mayor que Lista 1');
		}
		else{
			alert('Las listas son iguales.');
		}
	}
	function identiTriangle(){
		/*lado1=parseInt(prompt('Ingrese longitud del lado 1:'));
		lado2=parseInt(prompt('Ingrese longitud del lado 2:'));
		lado3=parseInt(prompt('Ingrese longitud del lado 3:'));
		if(){

		}
		else if(){

		}
		else if(){

		}
		else{

		}*/
	}
	function traducir(){
		switch(prompt('Ingrese palabra a traducir \n(casa, mesa, perro o gato):').toLowerCase()){
			case 'casa':
			texto="house";
			break;
			case 'mesa':
			texto="table";
			break;
			case 'perro':
			texto='dog';
			break;
			case 'gato':
			texto='cat';
			break;
			default:
			texto='La palabra no se encuentra en la base de datos';
		}
		alert(texto);
	}
	function censar(){

	}
/*JS2-Ejercicios: Estructuras condicionales y repetitivas en JS*/
/*JS3-Array*/	
	var nombres=['Sofía','Alex','Sara','Andrea'];
	function agregarNombre(){
		alert(nombres);
		var agregar=prompt('¿Desea agregar más nombres? SÍ o NO');
		if(agregar.toUpperCase()=='SÍ'|| agregar.toUpperCase()=='SI'){
			nuevoNombre=prompt('Ingrese nombre a agregar:');
			nombres.push(nuevoNombre);
			alert('Agregado:\n'+nombres);
			return nombres;
		}
		else{
			alert('Se terminará la función');
			return
		}
	}
/*JS3-Array*/
/*JS4-Ejercicios:Funciones*/
	function menordeTres(){

	}
/*JS4-Ejercicios:Funciones*/
