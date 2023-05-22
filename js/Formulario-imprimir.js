function PonerData (){
    const correo = document.querySelector('#grupo__correo')
const clickenvio1 = document.querySelector('.Click-envio')
const clickenvio2 = document.querySelector('.Click-envio2')
 


   

  const direccion = document.querySelector('#grupo__direccion')
  
  
  const elcorreo = JSON.parse(localStorage.getItem("Formulario"));
  let correotexto= elcorreo.correo
  let direcciontexto =elcorreo.direccion
  correo.innerHTML=`${correotexto}`
  
  direccion.innerHTML=`${direcciontexto}`
  clickenvio1.addEventListener('click',()=>{
    const enviorapido=document.querySelector('#opcion4').textContent
    const preciorapido=document.querySelector('#precio2').textContent
    const Envio ={
        Tipo:enviorapido,
        precio:preciorapido,
       }
       function addLocalStorage(){
        localStorage.setItem('Tipo-precio', JSON.stringify(Envio))
      }
      addLocalStorage()
      window.onload = function(){
       const storage = JSON.parse(localStorage.getItem('Tipo-precio'));
        if(storage){
          Envio = storage;
         
        }
      } 
 })
 clickenvio2.addEventListener('click',()=>{
    const envionormal=document.querySelector('#opcion3').textContent
    const precionormal=document.querySelector('#precio1').textContent
    const Envio ={
        Tipo:envionormal,
        precio:precionormal,
       }
       function addLocalStorage(){
        localStorage.setItem('Tipo-precio', JSON.stringify(Envio))
      }
      addLocalStorage()
      window.onload = function(){
       const storage = JSON.parse(localStorage.getItem('Tipo-precio'));
        if(storage){
          Envio = storage;
         
        }
      } 
 })
 const elenvio = JSON.parse(localStorage.getItem("Tipo-precio"));
 let enviotexto=elenvio.Tipo
 let envioprecio=elenvio.precio
 const enviotitle= document.querySelector('#Envio-title')
 const envioprice = document.querySelector('#Envio-precio')
 enviotitle.innerHTML=`${enviotexto} ·`
 envioprice.innerHTML=`${envioprecio}`
  }
  PonerData()