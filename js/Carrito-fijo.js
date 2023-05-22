"use strict";
const Clickbutton = document.querySelectorAll('.addToCart')
const tbody = document.querySelector('.shoppingCartItemsContainer')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
  
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.añadir-cesta')
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('#item-price').textContent;
  const itemImg = item.querySelector('#item-image').src;
  const itemTalla = document.querySelector('.tallas').value;
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1,
    talla:itemTalla,
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){
  const InputElemnto = tbody.getElementsByClassName('shopping-cart-quantity-input2')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('div')
    tr.classList.add('ItemCarrito')
    const Content = `
    
     <div class="row shoppingCartItem">
                    <div  class="desaparecer">
                      <div class="shopping-cart-item d-flex  h-100  pb-2 pt-3">
                          <img src="${item.img}" class="shopping-cart-image2">
                          <div class="d-inline-block titulo-detalles">
                          <h6 class="shopping-cart-item-title2 shoppingCartItemTitle  ml-3 mb-0">${item.title}</h6>
                          <h6 class="Talla-carrito">${item.talla}</h6>
                          <div
                 class="shopping-cart-quantity d-flex justify-content-between align-items-center ">
                 <button class="menos">
                  <span class="icono-menos"><img src="img/mercandaisin/carrito/menos.png" alt="" width="8px"height="8px"></span>
                 </button>
                 <input class="shopping-cart-quantity-input2 shoppingCartItemQuantity" type="number"
                     value="${item.cantidad}" min="1" max="7">
                     <button class="mas">
                      <span class="icono-mas"><img src="img/mercandaisin/carrito/anadir.png" alt="" width="8px"height="8px"></span>
                     </button>
                     <div class="shopping-cart-price2 d-flex align-items-center " style="margin-left:1rem">
                      <p class="item-price2 mb-0 shoppingCartItemPrice">${item.precio}</p>
                  </div>
             </div>
                          </div>
                      </div>
                  </div>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.shoppingCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("€", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total ${Total}€`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.shoppingCartItemTitle').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  } 
  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.shoppingCartItemTitle').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}