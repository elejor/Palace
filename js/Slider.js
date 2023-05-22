const imgArray = [
    './img/sliderBuckinghampalace/slider0.jpg',
    './img/sliderBuckinghampalace/slider1.jpg',
    './img/sliderBuckinghampalace/slider2.jpg',
    './img/sliderBuckinghampalace/slider3.jpg',
    './img/sliderBuckinghampalace/slider4.jpg',
    './img/sliderBuckinghampalace/slider5.jpg',
    './img/sliderBuckinghampalace/slider6.jpg',
  ]
  
  const img = document.querySelector('#slide')
  //const img = document.getElementById('slide')
  let i = 0
  
  const slideShow = () => {
    img.src = imgArray[i]
    i = ( i < imgArray.length - 1) ? i+1 : 0
  }
  
  const interval = () => {
    setInterval(slideShow, 5000)
  }
   
  const imgArray3 = [
    './img/sliderpalace/slider0.jpg',
    './img/sliderpalace/slider1.jpg',
    './img/sliderpalace/slider2.jpg',
    './img/sliderpalace/slider3.jpg',
    './img/sliderpalace/slider4.jpg',
    './img/sliderpalace/slider5.jpg',
    './img/sliderpalace/slider6.jpg',
  ]
  const img3 = document.querySelector('#slide3')
  let u = 0
  const slideShow3 = () => {
    img3.src = imgArray3[u]
    u = ( u < imgArray3.length - 1) ? u+1 : 0
  }
  
  const interval3 = () => {
    setInterval(slideShow3, 4000)
  }
  const imgArray2 = [
    './img/sliderabudabi/slider0.jpg',
    './img/sliderabudabi/slider1.jpg',
    './img/sliderabudabi/slider2.jpg',
    './img/sliderabudabi/slider3.jpg',
    './img/sliderabudabi/slider4.jpg',
    './img/sliderabudabi/slider5.jpg',
    './img/sliderabudabi/slider6.jpg',
  ]
  const img2 = document.querySelector('#slide2')
  let e = 0
  const slideShow2 = () => {
    img2.src = imgArray2[e];
    e = ( e < imgArray2.length - 1) ? e+1 : 0
  }
  
  const interval2 = () => {
    setInterval(slideShow2, 5000)
  }
  
   
window.addEventListener('scroll',()=>{
const scrolled= window.scrollY;;
console.log(scrolled)
if(scrolled>100){
  document.querySelector(".titulo-descubremas").classList.add("activo");
  document.querySelector(".linea-descubremas").classList.add("activo");
 document.querySelector(".descubremas").classList.add("activo");
 document.querySelector(".titulo-slider").classList.add("activo");
}
else{
  document.querySelector(".titulo-descubremas").classList.remove("activo");
  document.querySelector(".descubremas").classList.remove("activo");
  document.querySelector(".linea-descubremas").classList.remove("activo");
  document.querySelector(".titulo-slider").classList.remove("activo");
}
if(scrolled>393){
  document.querySelector(".titulo-descubremas").classList.add("activo2");
  document.querySelector(".linea-descubremas").classList.add("activo2");
 document.querySelector(".descubremas").classList.add("activo2");
 document.querySelector(".titulo-slider").classList.add("activo2");
}
else{
  document.querySelector(".titulo-descubremas").classList.remove("activo2");
  document.querySelector(".descubremas").classList.remove("activo2");
  document.querySelector(".linea-descubremas").classList.remove("activo2");
  document.querySelector(".titulo-slider").classList.remove("activo2");
}
})  
  