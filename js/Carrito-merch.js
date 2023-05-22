const Clickbutton = document.querySelectorAll('.añadir-cesta')
const tbody = document.querySelector('.shoppingCartItemsContainer');
const tbody2 = document.querySelector('.Envios');
const tbody3 = document.querySelector('.tbody4');
const tbody4 = document.querySelector('.tbody6');
let carrito2 = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
  const totalproducto = document.querySelector('.shopping-cart-total2')
  totalproducto.style.display="block";
  const vacio = document.querySelector('.vacia')
vacio.style.display="none";
})
function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.texto-camisetas')
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('#item-price').textContent;
  const itemImg =document.querySelector('.imagen-camis').src;
  const itemTalla = document.querySelector('.tallas').value;
  
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1,
    talla:itemTalla,
    envio:10,
  }
  
  addItemCarrito(newItem)
}

function addItemCarrito(newItem){
  const InputElemnto =tbody.getElementsByClassName('shopping-cart-quantity-input2')
  for(let i =0; i < carrito2.length ; i++){
    if(carrito2[i].title.trim() === newItem.title.trim()){
      carrito2[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito2.push(newItem)
  
  renderCarrito()
  renderCarrito2()
  renderCarrito3()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito2.map(item => {
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
    tr.querySelector('.mas').addEventListener('click',sumaCantidad,()=>{
      const numinput=tr.querySelector(".shopping-cart-quantity-input2")
      numinput.stepUp()
    })
    tr.querySelector(".shopping-cart-quantity-input2").addEventListener('change', sumaCantidad,()=>{
      
    })
  })

     
  
  CarritoTotal()
  
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.shoppingCartTotal')
  const itemCartTotal2 =document.querySelector('.shoppingCartTotal2')
  const itemCartTotal3 =document.querySelector('.shoppingCartTotal3')
  const itemCartTotal4 =document.querySelector('.shoppingCartTotal4')
  const itemCartTotal5 = document.querySelector('.shoppingCartTotal5')
  const itemCartTotal6 = document.querySelector('.shoppingCartTotal6')
  const itemCartTotal7 = document.querySelector('.shoppingCartTotal7')
  carrito2.forEach((item) => {
    const precio = Number(item.precio.replace("€", ''));
    const envio = Number(item.envio);
    Total = Total + precio*item.cantidad;
    Tot = precio*item.cantidad;
    Toten= Total + envio
    envioprecio=envio
  })
  itemCartTotal.innerHTML=`${Total}€`
  itemCartTotal2.innerHTML=`${Total}€`
  itemCartTotal3.innerHTML=`${Total}€`
  itemCartTotal4.innerHTML=`${Toten}€`
  itemCartTotal5.innerHTML=`${Tot}€`
  itemCartTotal6.innerHTML=`${envioprecio}€`
  itemCartTotal7.innerHTML=`${Total}€`
  const ancho = window.innerWidth;
  const precioCambiar= document.querySelector('#Precio-Cambiar')
  const precioCambiar2= document.querySelector('#Precio-Cambiar2')
  if(ancho < 1000){
  precioCambiar.classList.add('.shoppingCartTotal8')
  precioCambiar.innerHTML=`${Toten}€`
  precioCambiar2.classList.remove('.shoppingCartTotal8')
  }
  
  else{
  precioCambiar.classList.remove('.shoppingCartTotal8')
  precioCambiar2.classList.add('.shoppingCartTotal8')
  precioCambiar2.innerHTML=`${Toten}€`
  }
 
  addLocalStorage()
}
const ancho = window.innerWidth;

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.shoppingCartItemTitle').textContent;
  for(let i=0; i<carrito2.length ; i++){

    if(carrito2[i].title.trim() === title.trim()){
      carrito2.splice(i, 1)
    }
  } 

  tr.remove()
  CarritoTotal()
  
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.shoppingCartItemTitle').textContent;
  carrito2.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
       
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito-compra', JSON.stringify(carrito2))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito-compra'));
  if(storage){
    carrito2 = storage;
    const totalproducto = document.querySelector('.shopping-cart-total2')
    totalproducto.style.display="block";
    const vacio = document.querySelector('.vacia')
  vacio.style.display="none";
    renderCarrito()
    renderCarrito2()
    renderCarrito3()
  }
}
function renderCarrito2(){
 
    carrito2.map(item => {
      const td = document.createElement('tr')
      td.classList.add('ItemCarrito')
      const CarritoContent =`
       <tr >

           
      
        <td class="shopping-cart-item d-flex  pt-3 fondo-envio" style="
        justify-content: center; padding-left:0.5rem;
        ">
            
            <div class="d-inline-block titulo-detalles conjuntoimagen-talla">

            <div class="d-inline-block titulo-detalles ">
            <img src="${item.img}" class="shopping-cart-image2 ">
            </div>
           
            
            <div class="d-inline-block  conjuntotalla">
            
            <h6 class="shopping-cart-item-title2 shoppingCartItemTitle  ml-3 mb-0">${item.title}</h6>
            
            <h6 class="Talla-carrito">${item.talla}</h6>
            <h6 class="Remover">Remover</h6>
            </div>
            </div> 
          </td>
          </div>
          
          <td class="shopping-cart-price2 d-flex align-items-center" >
          <div class="d-inline-block  textos">
          <h4  class="total-envio">Precio</h4>
            </div>
            
            <p class="item-price2 mb-0 shoppingCartItemPrice ">${item.precio}</p>
            
            
        </td>
       
            <td
   class="shopping-cart-quantity d-flex justify-content-between align-items-center ">
   
   <div class="d-inline-block textos">
          <h4  class="total-envio">Cantidad</h4>
            </div>
            <div class="d-inline-block">
            <button class="menos">
    <span class="icono-menos"><img src="img/mercandaisin/carrito/menos.png" alt="" width="8px"height="8px"></span>
   </button>
   <input class="shopping-cart-quantity-input2 shoppingCartItemQuantity" type="number"
       value="${item.cantidad}" min="1" max="7">
       <button class="mas">
        <span class="icono-mas"><img src="img/mercandaisin/carrito/anadir.png" alt="" width="8px"height="8px"></span>
     
       </button>
            </div>
      
      </td>   
      
      <td class="shopping-cart-price2 d-flex align-items-center " >
      <h4  class="total-envio textos">Total</h4>
        <p class="item-price2 mb-0 shoppingCartItemPrice itemCartTotal4">${Tot}€</p>
    </td>
  
  
            
        
    </tr>` 
  td.innerHTML=CarritoContent;
      tbody2.append(td)
      td.querySelector('.mas').addEventListener('click',sumaCantidad,()=>{
        const numinput=td.querySelector(".shopping-cart-quantity-input2")
        numinput.stepUp()
      })
      td.querySelector(".shopping-cart-quantity-input2").addEventListener('change', sumaCantidad)
      td.querySelector('.Remover').addEventListener('click',removeItemCarrito,CarritoTotal)
    })
    CarritoTotal()
    
  }
  function renderCarrito3(){
 
    carrito2.map(item => {
     
        
      const td = document.createElement('div')
      td.classList.add('ItemCarrito')
      const CarritoContent =` <div class="row shoppingCartItem" >
     
      <div class="shopping-cart-item d-flex  h-100  pb-2 pt-3" style="padding-left: 0;">
        <div class="producto-imagen">
          <img src="${item.img}" class="shopping-cart-image2 especial10">
        </div>
          <div class="circulo-pequeño"><h6 class="cant-pedido">${item.cantidad}</h6></div>
          <div class="d-inline-block titulo-detalles especial20" style="padding-left: 0; margin-left: 0.75rem;">
          <h6 class="shopping-cart-item-title2 shoppingCartItemTitle  ml-3 mb-0">${item.title}</h6>
          <h6 class="Talla-carrito">${item.talla}</h6>
          
        </div>
        <div class="shopping-cart-price2 d-flex align-items-center">
          <p class="item-price2 mb-0 shoppingCartItemPrice shoppingCartTotal5 ">${Tot}€</p>
      </div>
          
      </div>
  
</div>`
  td.innerHTML=CarritoContent;
      tbody3.append(td)
      tbody4.append(td)
    })
  }
 const cambioprecio =document.querySelector('.Click-envio').addEventListener('change', Cambiarprecio)
  function Cambiarprecio(newItem){
    for(let i =0; i < carrito2.length ; i++){
      if(carrito2[i].envio === 10){
        carrito2[i].envio=15;
        CarritoTotal()
        
        return null;
      }
      else{
        carrito2[i].envio=15;
      }
    }
    
    carrito2.push(newItem)
    
    renderCarrito()
    renderCarrito2()
    renderCarrito3()
  }
  const cambioprecio2 = document.querySelector('.Click-envio2').addEventListener('change', Cambiarprecio2)
  function Cambiarprecio2(newItem){
    for(let i =0; i < carrito2.length ; i++){
      if(carrito2[i].envio === 15){
        carrito2[i].envio=10;
        CarritoTotal()
        
        return null;
      }
      else{
        carrito2[i].envio=10;
      }
    }
    
    carrito2.push(newItem)
    
    renderCarrito()
    renderCarrito2()
    renderCarrito3()
  }  
  
  
 