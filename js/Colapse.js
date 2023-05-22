const boton1 =document.querySelector("#opcion1");
const quitarboton1 =document.querySelector("#opcion2");

boton1.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.Presionado')
  interiorBoton.classList.add("prendido");
})
quitarboton1.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.Presionado')
  interiorBoton.classList.remove("prendido");
})
const boton2 =document.querySelector("#opcion6");
const quitarboton2 =document.querySelector("#opcion5");
boton2.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.Presionado2')
  interiorBoton.classList.add("prendido");
})
quitarboton2.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.Presionado2')
  interiorBoton.classList.remove("prendido");
})
const boton3 =document.querySelector("#opcion8");
boton3.addEventListener('click', ()=>{
  const interiorBoton= document.querySelector('.Presionado3')
  interiorBoton.classList.toggle("prendido");
})







