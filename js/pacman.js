const pacmankiller=document.querySelector("#pacman")
window.addEventListener('scroll',()=>{
    const scrolled= window.scrollY;;
    console.log(scrolled)
    if(scrolled>1219){
        
          function avanzarpacman(){
            const imgArray4 = [
                './img/sliderabudabi/Pacman-Transparent.png',
                './img/sliderabudabi/Punto Pacman.png',
         
              ]
              const img4=document.querySelector('.galleta');
              const img5=document.querySelector('.galleta1');
              const img6=document.querySelector('.galleta2');
              const img7=document.querySelector('.galleta3');
              const img8=document.querySelector('.galleta4');
              const img9=document.querySelector('.galleta5');
              const img10=document.querySelector('.galleta6');
              const img11=document.querySelector('.galleta7');
              const img12=document.querySelector('.galleta8');
              const imagenes =[img4,img5,img6,img7,img8,img9,img10,img11,img12]
              let d = -1
              let f=-2
             
              console.log(imagenes)
              let l = 0
              const slideShow4 = () => {
                pacmankiller.classList.add("pacman0");
              
                d = ( d < imagenes.length - 1) ? d+1 : 0
                imagenes[d].src = imgArray4[0]
                
                f= ( f < imagenes.length -1) ? f+1: 0
                imagenes[f].src= imgArray4[1]
              
              
                l = ( l < imgArray4.length - 1) ? l+1 : 0
               
              }
             
        
              const interval4 = () => {
                setInterval(slideShow4, 1500)
              }
              interval4()
//                 const slideShow5 = () => {
//                   img5.src = imgArray4[l]
//                   l = ( l < imgArray4.length - 1) ? l+1 : 0
//                  pacmankiller.classList.add("pacman0");
//                  img4.classList.add("galleta0");
//                 }
//                 const interval5 = () => {
//                   setInterval(slideShow5, 2000)
//                 }
           
//               interval5()
//               const slideShow6 = () => {
//                 img6.src = imgArray4[l]
//                 l = ( l < imgArray4.length - 1) ? l+1 : 0
//                pacmankiller.classList.add("pacman0");
//                img5.classList.add("galleta0");
//               }
//               const interval6 = () => {
//                 setInterval(slideShow6, 3000)
//               }
         
//             interval6()
//             const slideShow7 = () => {
//               img7.src = imgArray4[l]
//               l = ( l < imgArray4.length - 1) ? l+1 : 0
//              pacmankiller.classList.add("pacman0");
//              img6.classList.add("galleta0");
//             }
//             const interval7 = () => {
//               setInterval(slideShow7, 4000)
//             }
       
//           interval7()
//           const slideShow8 = () => {
//             img8.src = imgArray4[l]
//             l = ( l < imgArray4.length - 1) ? l+1 : 0
//            pacmankiller.classList.add("pacman0");
//            img7.classList.add("galleta0");
//           }
//           const interval8 = () => {
//             setInterval(slideShow8, 5000)
//           }
     
//         interval8()
//         const slideShow9 = () => {
//           img9.src = imgArray4[l]
//           l = ( l < imgArray4.length - 1) ? l+1 : 0
//          pacmankiller.classList.add("pacman0");
//          img8.classList.add("galleta0");
//         }
//         const interval9 = () => {
//           setInterval(slideShow9, 6000)
//         }
   
//       interval9()
//       const slideShow10 = () => {
//         img10.src = imgArray4[l]
//         l = ( l < imgArray4.length - 1) ? l+1 : 0
//        pacmankiller.classList.add("pacman0");
//        img9.classList.add("galleta0");
//       }
//       const interval10 = () => {
//         setInterval(slideShow10, 7000)
//       }
 
//     interval10()
//     const slideShow11 = () => {
//       img11.src = imgArray4[l]
//       l = ( l < imgArray4.length - 1) ? l+1 : 0
//      pacmankiller.classList.add("pacman0");
//      img10.classList.add("galleta0");
//     }
//     const interval11 = () => {
//       setInterval(slideShow11, 8000)
//     }

//   interval11()
//   const slideShow12 = () => {
//     img12.src = imgArray4[l]
//     l = ( l < imgArray4.length - 1) ? l+1 : 0
//    pacmankiller.classList.add("pacman0");
//    img11.classList.add("galleta0");
//   }
//   const interval12 = () => {
//     setInterval(slideShow12, 9000)
//   }

// interval12()
            }
            avanzarpacman()
        
    }
   
    })
    
