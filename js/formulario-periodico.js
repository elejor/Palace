const inputs = document.querySelectorAll('.formulario_grupos_input');
const continuar = document.querySelector(".btn-continuar");
const formulario = document.getElementById('formulario');
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}[\s]?$/,
  apellido:/^[a-zA-ZÀ-ÿ\s]{4,15}[\s]?$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
  nombre: false,
  apellido: false,
  correo: false,
  
 lenguaje:false,
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
function seleccionarLenguaje(){
  let cbxLenguajes = document.getElementById('cbxLenguajes');
  let lenguaje = cbxLenguajes.value;
  if(lenguaje=1){
    campos= true;
  }
 
}


inputs.forEach((input) => {
  input.addEventListener('keyup', validarNumero);
  input.addEventListener('blur', validarNumero);
});



formulario.addEventListener('submit',(e)=>{
  e.preventDefault();

 
  if(campos.nombre && campos.apellido&& campos.correo){
    formulario.reset();
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo2');
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito2-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito2-activo');
    },5000);
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo2');
  }
});
