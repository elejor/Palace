const body=document.querySelector('body')
const cerrarmenu = document.querySelector('.cancelarmenu');
const cerrarcarro = document.querySelector('.cancelarcarro');
  const menuopciones = document.querySelector('.menu-opciones');
  const opciones=document.querySelector('.fondo-opciones');
  const carritocompra=document.querySelector('.carrito-compra');
  const abrirmenu =document.querySelector('.menu-icon');
  const abrircarrito =document.querySelector('.bag-icon');
 cerrarmenu.addEventListener('click',(e)=>{
    menuopciones.style.display="none";
    body.style.overflow=""
  })
  cerrarcarro.addEventListener('click',(e)=>{
    menuopciones.style.display="none";
    body.style.overflow=""
  })
  abrirmenu.addEventListener('click',(e)=>{
    menuopciones.style.display="block";
  opciones.style.display="block"
  body.style.overflow="hidden"
  })
  abrircarrito.addEventListener('click',(E)=>{
    menuopciones.style.display="block";
    opciones.style.display="none"
  carritocompra.style.display="block";
  body.style.overflow="hidden"
  })
  
  const facebook = document.querySelector('.icono-facebook');
 facebook.addEventListener('click' ,(e)=>{
    window.open("https://www.facebook.com/profile.php?id=100083898635213")
  })
 const instagram = document.querySelector('.icono-insta');
 instagram.addEventListener('click',(e)=>{
   window.open("https://www.instagram.com/jorge.almu")
 })
 const facebook2 = document.querySelector('.icono-facebook2');
 facebook2.addEventListener('click' ,(e)=>{
    window.open("https://www.facebook.com/profile.php?id=100083898635213")
  })
 const instagram2 = document.querySelector('.icono-insta2');
 instagram2.addEventListener('click',(e)=>{
   window.open("https://www.instagram.com/jorge.almu")
 })
const FACEBOOK3 = document.querySelector('.icono-facebook3');
FACEBOOK3.addEventListener('click',(e)=>{
  window.open("https://www.facebook.com/profile.php?id=100083898635213")
})