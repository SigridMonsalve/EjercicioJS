function paresInverso(){
	var arreglo=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var i;
	for(i=0; i<arreglo.length; i++){
		arreglo.splice(i,1);	
	}
	arreglo.reverse();
	alert(arreglo);
}
function letraDNI(){
	var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
	var numeroDNI=parseInt(prompt('Ingrese el DNI sin letra.'));
	if(numeroDNI<0 || numeroDNI>99999999){
		alert('El número ingresado no es válido.');
		return
	}
	else{
		var letraDNI=prompt('Ahora ingrese la letra del DNI en mayúscula.');
		var resto=numeroDNI%23;
		var letra=letras[resto];
		if(letra===letraDNI.toUpperCase()){
			alert('DNI verificado.')
		}
		else{
			alert('La letra indicada no es correcta.')
		}
	}
}

