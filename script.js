let Nombre = "Josue"
let Apellido = " Vicente"

let estudiante = Nombre.concat(Apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let numeroDeLetras = estudiante.length
console.log(numeroDeLetras)

let pirmerLetra = Nombre.charAt()
console.log(pirmerLetra)

let ultimaLetra = Apellido.slice(6)
console.log(ultimaLetra)

let eliminaEspacios = estudiante.trim()
console.log(eliminaEspacios)

let verdadero = estudiante.includes(Nombre)
console.log(verdadero)