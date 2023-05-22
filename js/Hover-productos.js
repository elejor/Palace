function HoverPrendido(){
const camisa = document.querySelectorAll('.camisa');
    camisa.forEach((item)=>{
        const hover=item.querySelector('.hover-producto');
        hover.classList.add('prendido')
      console.log(hover)
})
}
HoverPrendido()