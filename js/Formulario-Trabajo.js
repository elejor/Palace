const inputs = document.querySelectorAll('.formulario_grupos_input');
const continuar = document.querySelector(".btn-continuar");
const formulario = document.getElementById('formulario');
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}[\s]?$/,
  apellido:/^[a-zA-ZÀ-ÿ\s]{4,15}[\s]?$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  compañia:/^[a-zA-Z0-9_.+-]{4,15}[\s]?$/,
 numero: /^\d{3}[\s-.]?\d{2}[\s-.]?\d{2}[\s-.]?\d{2}[\s-.]?$/,
  
  comensales:/^[0-9]{1,2}$/,
  
}
const campos = {
  nombre: false,
  apellido: false,
  correo: false,
  numero: false,
 
 trabajo:false,
}
const validarNumero = (e)=>{
 switch (e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "apellido":
      validarCampo(expresiones.apellido, e.target, 'apellido');
    break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
    break;
    case "numero":
      validarCampo(expresiones.numero, e.target, 'numero');
    break;
    case "fecha":
      validarCampo(expresiones.fecha, e.target, 'fecha');
    break;
    case "comensales":
      validarCampo(expresiones.comensales, e.target, 'comensales');
    break;
    
 }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupos_invalido');
    document.getElementById(`grupo__${campo}`).classList.add('formulario_grupos_valido');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario_grupos_invalido');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario_grupos_valido');
    campos[campo] = false;
  }
}
function seleccionarRestaurante(){
  let cbxLenguajes = document.getElementById('cbxLenguajes');
  let restaurante = cbxLenguajes.value;
  let cbxLenguajes1 = document.getElementById('cbxLenguajes2');
  let trabajo = cbxLenguajes1.value;
  if(restaurante="establecimiento"){
    campos[restaurante]= true;
  }

}
function seleccionarTrabajo(){
    let cbxLenguajes1 = document.getElementById('cbxLenguajes2');
  let trabajo = cbxLenguajes1.value;
  if(trabajo="trabajo"){
    campos[trabajo]= true;
  }
}
let archivo = document.querySelector('#file')
archivo.addEventListener('change',()=>{
  document.querySelector('.añadir-file').innerHTML=archivo.files[0].name;
})

inputs.forEach((input) => {
  input.addEventListener('keyup', validarNumero);
  input.addEventListener('blur', validarNumero);
});



formulario.addEventListener('submit',(e)=>{
  e.preventDefault();

 
  if(campos.nombre && campos.apellido&& campos.correo&& campos.numero && campos.establecimiento && campos.trabajo){
    formulario.reset();
    document.querySelector('.añadir-file').innerHTML="Añadir curriculum"
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito2-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito2-activo');
    },5000);
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});

