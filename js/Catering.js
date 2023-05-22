"use strict";
const body = document.querySelector("body");
const carrito = document.querySelector(".carritopedidos");
const carritoboton = document.querySelector(".imagen-carrito");
const añadirproducto=document.querySelector(".item");
const escs = document.querySelectorAll(".esc");
const carritovacio = document.querySelector(".carrito-grande");
const total =document.querySelector(".total-dinero");
const totaltexto=document.querySelector(".shopping-cart-total")
const productocaraterísticas=document.querySelector(".productoelegidocarrito");
const carritopedidos2=document.querySelector(".carritopedidos2");
const eliminarcarrito = document.querySelector(".Limpiarcarrito");
const eliminardiv = document.querySelector(".Eliminar");
const eliminarsi = document.querySelector(".btn-si");
const eliminarno = document.querySelector(".btn-no");
const comprarcarrito=document.querySelector(".btn-comprar");
const actualizarproducto=document.querySelector(".btn-actualizar");
const volver=document.querySelector(".volver");
const volveredit=document.querySelector(".editvolver");
const menu2 = document.querySelector(".menu2")
const carritopedidos3 =document.querySelector(".carritopedidos3");
const iniciarsesion = document.querySelector(".iniciarsesion");
menu2.addEventListener('click',(e)=>{
  menu2.classList.add("activo")
})

carritoboton.addEventListener('click',(e)=>{
  carrito.style.display="flex";
  body.style.overflow="hidden";
})

escs.forEach((esc) => {
	esc.addEventListener('click',(e)=>{
    carrito.style.display="none";
    body.style.overflow="visible";
    carritopedidos4.style.display="none";
    carritopedidos3.style.display="none";
    carritopedidos2.style.display="none";
  })
});

eliminarcarrito.addEventListener('click',(e)=>{
 eliminardiv.style.display="flex";
 eliminarcarrito.style.display="none";
 comprarcarrito.style.display="none";
})
eliminarno.addEventListener('click',(e)=>{
  eliminardiv.style.display="none";
  eliminarcarrito.style.display="block";
  comprarcarrito.style.display="block";
 })
 eliminarsi.addEventListener('click',(e)=>{
  eliminardiv.style.display="none";
  eliminarcarrito.style.display="block";
  comprarcarrito.style.display="block";
 })

 actualizarproducto.addEventListener('click',(e)=>{
  carritopedidos2.style.display="none";
  carrito.style.display="flex";
 })
 iniciarsesion.addEventListener('click',(e)=>{
  carritopedidos3.style.display="flex";
  body.style.overflow="hidden";
 })
 volver.addEventListener('click',(e)=>{
  carrito.style.display="none";
  body.style.overflow="visible";
 })
volveredit.addEventListener('click',(e)=>{
  carritopedidos2.style.display="none";
  carrito.style.display="flex";
  body.style.overflow="hidden";
 })
 const d = document;
 function ScrollSpy(){
  const $sections = d.querySelectorAll("section[data-scroll-spy]")  
  const cb = (entries)=>{
// console.log("entries",entries);
entries.forEach(entry =>{
  // console.log("entry",entry);
  const id = entry.target.getAttribute("id")
  // console.log(id)
 
  if(entry.isIntersecting){
   d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
   d.querySelector(".menu2").classList.add("activo");
 
  }else{
    d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

  }
 
  
})
  };
 
  const observer = new IntersectionObserver(cb,{
    threshold:[0.5,0.6],

  });
  $sections.forEach(el=>observer.observe(el))
}
ScrollSpy();


const tbody = document.querySelector('.shoppingCartItemsContainer');
 const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
 addToShoppingCartButtons.forEach((addToCartButton) => {
   addToCartButton.addEventListener('click', addToCartClicked,updateShoppingCartTotal);
 });
  
 const comprarButton = document.querySelector('.comprarButton1');
 comprarButton.addEventListener('click', comprarButtonClicked);
 const EliminarCarrito = document.querySelector('.comprarButton2');
 EliminarCarrito.addEventListener('click', comprarButtonClicked);
 

 const shoppingCartItemsContainer = document.querySelector(
   '.shoppingCartItemsContainer'
 );
 
 function addToCartClicked(event) {
   const button = event.target;
   const item = button.closest('.item');
 
   const itemTitle = item.querySelector('.item-title').textContent;
   const itemPrice = item.querySelector('.item-price').textContent;
   const itemImage = item.querySelector('.item-image').src;
  const numproductos=document.querySelector('.cantidadproductos')
  numproductos.style.display="block"

  
   carritovacio.style.display="none";
   total.style.display="block";
   totaltexto.style.display="block"
  productocaraterísticas.style.display="block";
  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  }
  
 function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
   if (elementsTitle[i].innerText === itemTitle) {
     let elementQuantity = elementsTitle[
       i
     ].parentElement.parentElement.parentElement.parentElement.querySelector(
       '.shoppingCartItemQuantity'
     );
     elementQuantity.value++;
     
     updateShoppingCartTotal();
     return;
   }
} 

   const shoppingCartRow = document.createElement('div');
   const shoppingCartContent = `
    <div class="row shoppingCartItem">
         <div class="col-6">
             <div class="shopping-cart-item d-flex  h-100  pb-2 pt-3">
               <img src="img/iconos/cancelar.png" class="buttonDelete">
                 <img src=${itemImage} class="shopping-cart-image">
                 <div class="d-inline-block text-center">
                 <h6 class="shopping-cart-item-title shoppingCartItemTitle  ml-3 mb-0">${itemTitle}</h6>
                 <div class="editarboton">
                 <div class="editarproducto">
                         <h6>Edit item</h6>
                     </div>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-2">
             <div class="shopping-cart-price d-flex align-items-center h-100  pb-2 pt-3">
                 <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
             </div>
         </div>
         <div class="col-4">
             <div
                 class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100  pb-2 pt-3">
                 <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" min="0"
                     value="1">
                     
             </div>
         </div>
     </div>
     `;

   shoppingCartRow.innerHTML = shoppingCartContent;
   shoppingCartItemsContainer.append(shoppingCartRow);
   shoppingCartRow
     .querySelector('.buttonDelete')
     .addEventListener('click', removeShoppingCartItem);
     
   shoppingCartRow
     .querySelector('.shoppingCartItemQuantity')
     .addEventListener('change', quantityChanged);
     const editarboton = document.querySelector(".editarproducto");
     editarboton.addEventListener('click',(e)=>{
       carritopedidos2.style.display="flex";
      carrito.style.display="none"
    body.style.overflow="hidden"})
   updateShoppingCartTotal();
 }

 function updateShoppingCartTotal() {
   let total = 0;
   let producto = 0
   const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
   const numeroproducto=document.querySelector('.numero')
   const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

   shoppingCartItems.forEach((shoppingCartItem) => {
     const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
       '.shoppingCartItemPrice'
     );
     const shoppingCartItemPrice = Number(
       shoppingCartItemPriceElement.textContent.replace('€', '')
     );
     const totalproductos=document.querySelectorAll('.shoppingCartItemQuantity');
     totalproductos.forEach((e)=>{
      e=totalproductos

     })
     const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
       '.shoppingCartItemQuantity'
     );
     const shoppingCartItemQuantity = Number(
       shoppingCartItemQuantityElement.value
     );
     total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
     producto=shoppingCartItemQuantityElement.value
   });

   numeroproducto.innerHTML=`${producto}`;
   shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;

}

 function removeShoppingCartItem(event) {
   const buttonClicked = event.target;
   buttonClicked.closest('.shoppingCartItem').remove();
   updateShoppingCartTotal();
    }
 
 function quantityChanged(event) {
   const input = event.target;
   input.value <= 0 ? (input.value = 1) : null;
   
   updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';

  updateShoppingCartTotal();
}

// Formulario
 const numero = document.getElementsByClassName('.input-telefono');
 const inputNumero = document.querySelector(".input-numero");
 const inputs = document.querySelectorAll('.formulario__input');
 const continuar = document.querySelector(".btn-continuar");
 const carritopedidos4 = document.querySelector(".carritopedidos4")
 const formulario = document.getElementById('formulario');
 const expresiones = {
   nombre: /^[a-zA-ZÀ-ÿ\s]{4,25}[\s]?$/,
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{3}[\s-.]?\d{2}[\s-.]?\d{2}[\s-.]?\d{2}[\s-.]?$/ // 7 a 14 numeros.
 }
 const campos = {
   usuario: false,
   nombre: false,
   password: false,
   correo: false,
   telefono: false
 }
 const validarNumero = (e)=>{
  switch (e.target.name){
   case  "numero":
     if(expresiones.telefono.test(e.target.value)){
       document.querySelector(`.input-telefono`).classList.remove(`input-telefono-incorrecto2`);
       document.querySelector(`.input-telefono`).classList.add(`input-telefono-correcto2`);
       document.querySelector(`.formulario__input-error`).style.display=`none`;
       document.querySelector(`.btn-continuar`).classList.add(`btnvalido`);
       console.log(e.target.value)
       const tituloverificacion= document.getElementById('titulo-verificacion');
         tituloverificacion.innerHTML=`<h3 class="verificación">
         El codigo de verificación se enviará al ${e.target.value}
         </h3>`
       document.querySelector(`.btn-continuar`).addEventListener("click",(e)=>{
         carritopedidos4.style.display="flex";
         carritopedidos3.style.display="none";
       })
     } else{
       document.querySelector(`.input-telefono`).classList.add(`input-telefono-incorrecto2`);
       document.querySelector(`.input-telefono`).classList.remove(`input-telefono-correcto2`);
       document.querySelector(`.formulario__input-error`).style.display=`block`;
       document.querySelector(`.btn-continuar`).classList.remove(`btnvalido`);
     }
     break;
     case "nombre":
       validarCampo(expresiones.nombre, e.target, 'nombre');
     break;
     case "correo":
       validarCampo(expresiones.correo, e.target, 'correo');
     break;
  }
 }
 
 const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
     document.getElementById(`grupo__${campo}`).classList.remove('input-telefono-incorrecto');
     document.getElementById(`grupo__${campo}`).classList.add('input-telefono-correcto');
     document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
     campos[campo] = true;
   } else {
     document.getElementById(`grupo__${campo}`).classList.add('input-telefono-incorrecto');
     document.getElementById(`grupo__${campo}`).classList.remove('input-telefono-correcto');
     document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
     campos[campo] = false;
   }
 }
 
 
 
 inputNumero.addEventListener('keyup',validarNumero);
 inputNumero.addEventListener('blur',validarNumero);
 inputs.forEach((input) => {
   input.addEventListener('keyup', validarNumero);
   input.addEventListener('blur', validarNumero);
 });
 
 
 
 formulario.addEventListener('submit',(e)=>{
   e.preventDefault();
   const terminos = document.getElementById('terminos');
   if(campos.nombre && campos.correo && terminos.checked){
     formulario.reset();
     document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
     document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
     setTimeout(() => {
       document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
     },5000);
   } else {
     document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
   }
 });



 
 
 
  