const inputs = document.querySelectorAll('.formulario_grupos_input');
const inputsvalidos=document.querySelectorAll('.formulario_grupos_input')
const continuar = document.querySelector("#continuar-form");
const formulario = document.getElementById('formulario');
const boton =document.querySelector(".tbody5");

boton.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.tbody3')
  interiorBoton.classList.toggle("prendido");
  const linea = document.querySelector(".Vista-Producto2")
  linea.classList.toggle("prendida");
})




const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}[\s]?$/,
  apellido:/^[a-zA-ZÀ-ÿ\s]{4,15}[\s]?$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  direccion:/^[a-zA-ZÀ-ÿ\s0-9]{4,30}[\s]?$/,
  direccion2:/^[a-zA-ZÀ-ÿ\s0-9]{2,20}[\s]?$/,
  ciudad:/^[a-zA-ZÀ-ÿ\s]{4,20}[\s]?$/,
  codigopostal:/^[0-9]{5}$/,
  
}



const campos = {
  continente:false,
  nombre: false,
  apellido: false,
  correo: false,
 direccion:false,
 direccion2:false,
 ciudad:false,
 pais:false,
 codigo:false,

}



const validarNumero = (e)=>{
 switch (e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
      validarActivo(expresiones.nombre, e.target, 'nombre');
    break;
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellido');
      validarActivo(expresiones.apellido, e.target, 'apellido');
    break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      validarActivo(expresiones.correo, e.target, 'correo');
    break;
    
    case "direccion":
      validarCampo(expresiones.direccion, e.target, 'direccion');
      validarActivo(expresiones.direccion, e.target, 'direccion');
    break;
    case "direccion2":
      validarCampo(expresiones.direccion2, e.target, 'direccion2');
      validarActivo(expresiones.direccion2, e.target, 'direccion2');
    break;
    case "ciudad":
      validarCampo(expresiones.ciudad, e.target, 'ciudad');
      validarActivo(expresiones.ciudad, e.target, 'ciudad');
    break;
    case "codigo":
      validarCampo(expresiones.codigopostal, e.target, 'codigo');
      validarActivo(expresiones.codigopostal, e.target, 'codigo');
    break;
    
 }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).style.border="1px solid #d6cece";
    document.getElementById(`grupo__${campo}`).style.color="#000";
    document.getElementById(`grupo__${campo}`).classList.add('formulario_grupos_valido');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupos_invalido');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupos_invalido2');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).style.border="1px solid red";
    document.getElementById(`grupo__${campo}`).style.color="1px solid red";
    document.getElementById(`grupo__${campo}`).classList.add('formulario_grupos_invalido');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupos_valido');
    document.getElementById(`grupo__${campo}`).classList.add('formulario_grupos_invalido2');
  
    campos[campo] = false;
  }
  function Confirmar(){
    const storage = JSON.parse(localStorage.getItem('Completo'));
    let confimar = storage
    if(confimar===0){
      console.log(campos)
      
    }
   } 
   Confirmar()
}
const validarActivo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`form_label_${campo}`).classList.add("activo")
    document.getElementById(`grupo__${campo}`).classList.add("activo")
   
  } else {
    document.getElementById(`form_label_${campo}`).classList.remove("activo")
    document.getElementById(`grupo__${campo}`).classList.remove("activo")
  }
 
}
function seleccionarLenguaje(){
  let cbxLenguajes = document.getElementById('cbxLenguajes');
  let lenguaje = cbxLenguajes.value;
  if(lenguaje>1){
    campos= true;
  }
 
}


inputs.forEach((input) => {
  input.addEventListener('keyup', validarNumero);
  input.addEventListener('blur', validarNumero);
});


formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
 

  function Comprobar(){
    const comprobar =JSON.parse(localStorage.getItem('Completo'));
    let resultado = comprobar
     if(resultado===0){
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo3');
      window.location.href="file:///C:/Users/Francisco/Desktop/Restaurante%20palace/Envio-Envio.html"
      
     } 
   } 
   Comprobar()
  if(campos.nombre && campos.apellido&&campos.correo&&campos.codigo&&campos.direccion2&&campos.direccion&&campos.ciudad){
   window.location.href="file:///C:/Users/Francisco/Desktop/Restaurante%20palace/Envio-Envio.html"
   const data = Object.fromEntries(
    new FormData(e.target))
    const verdadeiro = 0
    function addLocalStorage(){
     localStorage.setItem('Formulario', JSON.stringify(data))
     localStorage.setItem('Completo', JSON.stringify(verdadeiro))
     
   }
   addLocalStorage()
 
   window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('Formulario'));
     if(storage){
       data = storage;
      
      
     }
   } 
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo3');
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito2-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito2-activo');
    },5000);
    
  } else {
    
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo3');
    },0005);
    
   
  }
});




// Formulario datos
function PonerData (){
  let valido = 0
  const correo = document.querySelector('#grupo__correo')
const continente = document.querySelector('#grupo__continente')
const nombre = document.querySelector('#grupo__nombre')
const apellido = document.querySelector('#grupo__apellido')
const compañia = document.querySelector('#grupo__compañia')
const direccion = document.querySelector('#grupo__direccion')
const apartamento = document.querySelector('#grupo__direccion2')
const ciudad = document.querySelector('#grupo__ciudad')
const pais = document.querySelector('#grupo__pais')
const codigoPostal = document.querySelector('#grupo__codigo')
const telefono = document.querySelector('#grupo__telefono')

const elcorreo = JSON.parse(localStorage.getItem("Formulario"));
let correotexto= elcorreo.correo
let nombretexto =elcorreo.nombre
let apellidotexto =elcorreo.apellido
let compañiatexto =elcorreo.compañia
let direcciontexto =elcorreo.direccion
let apartamentotexto =elcorreo.direccion2
let ciudadtexto =elcorreo.ciudad
let paistexto=elcorreo.pais
let codigopostal=elcorreo.codigo
let telefonotexto=elcorreo.telefono
correo.value=`${correotexto}`
nombre.value=`${nombretexto}`
apellido.value=`${apellidotexto}`
compañia.value=`${compañiatexto}`
direccion.value=`${direcciontexto}`
apartamento.value=`${apartamentotexto}`
ciudad.value=`${ciudadtexto}`
// pais.value=`${paistexto}`
codigoPostal.value=`${codigopostal}`
if(valido===0){
  const form_label=document.querySelectorAll('.form_label')
  form_label.forEach((form_label)=>{
    form_label.classList.add('activo');
  })
  const formulario_grupos_input=document.querySelectorAll('.formulario_grupos_input')
  formulario_grupos_input.forEach((form_label)=>{
    form_label.classList.add('activo');
  })
}
else{
 console.log("Error en el form_label")
}
}
PonerData()




