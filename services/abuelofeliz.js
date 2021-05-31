let arrayDias = [

	{
		"dia" : "Lunes",
		"precio" : 30
	},
	{
		"dia" : "Martes",
		"precio" : 30
	},
	{

		"dia" : "Miercoles",
		"precio" : 30
	},
	{
		"dia" : "Jueves",
		"precio" : 35
	},
	{
		"dia" : "Viernes",
		"precio" : 40
	},
	{
		"dia" : "Sabado",
		"precio" : 50
	},
	{
		"dia" : "Domingo",
		"precio" : 50
	}
]

let arraySilla = [
	{
		"necesita" : "Si",
		"adicional" : 20
	},
	{
		"necesita" : "No",
		"adicional" : 0
	}

]

let cmbDia = document.getElementById("cmbDia")
let cmbSilla = document.getElementById("cmbSilla")
let txtHoras = document.getElementById("txtHoras")
let txtEdad = document.getElementById("txtEdad")
let lblTarifa = document.getElementById("lblTarifa")



for(var i=0;i<arrayDias.length;i++){
	let obj = arrayDias[i]
	let option = document.createElement("option")
	option.value = obj
	option.innerHTML = obj.dia
	cmbDia.add(option)
}

for(var i=0;i<arraySilla.length;i++){
	let obj = arraySilla[i]
	let option = document.createElement("option")
	option.value = obj
	option.innerHTML = obj.necesita
	cmbSilla.add(option)
}

function calcularTarifa(){

	let objDia = arrayDias[cmbDia.selectedIndex]
	let objSilla = arraySilla[cmbSilla.selectedIndex]

	let precioDia = objDia.precio
	let precioSilla = objSilla.adicional
	let precioHora = objDia.precio*parseInt(txtHoras.value)
	var precioEdad = 0

	if (parseInt(txtHoras.value)){}

	if(parseInt(txtEdad.value) >120 || parseInt(txtEdad.value) <65){
		alert("El rango valido de vejez es de 65 a 120 años por favor ingrese una edad valida")
		return false

	}else if(parseInt(txtEdad.value) >65 && parseInt(txtEdad.value)<=70){ 
		precioEdad = 40
	}else if(parseInt(txtEdad.value) >70 && parseInt(txtEdad.value)<=80){
		precioEdad = 50
	}else if(parseInt(txtEdad.value) >80 && parseInt(txtEdad.value)<=90){
		precioEdad = 60
	}else{
		precioEdad = 70
	}

	let tarifa = precioDia + precioSilla + precioHora + precioEdad

	lblTarifa.innerHTML = "Su tarifa aproximada es:  S/." +tarifa 

}























