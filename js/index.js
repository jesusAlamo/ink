'use strict'

/*--------------------------------------------------------------*\
*index.js
*   Interacciones:
*       - Animaciones, efectos y mejor visualización del archivo index.html asociado
*   Estructura:
*       - Bloques de funcionalidades:
*           > Constantes y variables
*           > Funciones
*---------------------------------------------------------------*/

//Limpiamos la consola
// console.clear()

//-------------------------CIRCULO Y COLA COMO PUNTERO---------------------//
// Función para que el .cursor y su cola formada por un conjunto/array de .cursor__tail sigan al puntero mediante le valor devuelto (return) por la función MouseMove, la cual, entre otras cosas, nos ofrece la posición del puntero en la pantalla (CUIDADO CON ESTO porque no da la posición dentro de un elemento de la web (div/a/button/..) o al menos, no lo he conseguido encontrar o implementar. Entiendo que con alguna de las propiedades de MouseEvent se podría llegar a lograr (https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)):

////Definimos una constante para el circulo (.cursor) y un array de circulos de cola (.cursor__tail)
const cursor                = document.querySelector('.cursor')
let cursorTail              = document.querySelectorAll('.cursor__tail')

////Cuando el ratón se mueve (mousemove)
window.addEventListener( 'mousemove' , function( e ){

    ////A las coordenadas devueltas (e.client X, e.clientY) por la función de evento (e) se resta la mitad del ancho (30px) del circulo (.cursor) y los circulos de la cola (.cursor__tail)
    const cursorX = e.clientX - 30
    const cursorY = e.clientY - 30

    ////Y se traslada el circulo (.cursor) y los circulos de la cola (.cursor__tail) a esas nuevas coordenadas (.cursorX , .cursorY) para que estén centrados en el pixel de puntero.
    cursor.style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`
    cursorTail.forEach(function(eachCursor, i){
        cursorTail[i].style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`
    })

    ////Posteriormente se le aplicará un delay a los circulos de la cola (.cursor__tail) en index.css para crear un efecto de seguimiento
})



//----------------CAMBIO DE COLORES DE LA COLA DEL PUNTERO---------------------//
// Función para que la cola formada por un conjunto/array de .cursor__tail puedan cambiar de color según elija el usuario:

////Definimos un array de botones de selección de colores (.color__btn), una constante para el botón de borrado (.color__none) y una constante para el circulo interior del puntero que muestra el color escogido (.cursor__inner)
let colorBtn                = document.querySelectorAll('.color__btn')
const colorNone             = document.querySelector('.color__none')
const cursorInner           = document.querySelector('.cursor__inner')

colorBtn.forEach(function(eachBtn,i){

    ////Cuando se hace click en un botón de color (click)
    colorBtn[i].addEventListener('click',function(){

        ////Se les quita el color a todos botones de color
        colorBtn.forEach(function(eachBtn,k){
            colorBtn[k].style.backgroundColor=""
        })

        ////Si es el botón rojo (.color__btn[0])
        if(i === 0){
            
            ////A todos los componentes de la cola (.cursor__tail) se les aplica el color rojo y se les añade la clase 'active' para que sean visibles
            cursorTail.forEach(function(eachTail,j){
                cursorTail[j].classList.add('active')
                cursorTail[j].style.backgroundColor="red"
            })

            ////Se les da un sombreado de rango variable del mismo color a los distintos elementos de la cola (.cursor__tail)
            cursorTail.forEach(function(eachTail,k){
                const tailRadius = ( k + 1 ) * 20
                cursorTail[k].style.boxShadow= `0 0 100px ${tailRadius}px red`
            })

            ////Se le aplica el mismo color al circulo interior del puntero (.cursor__inner)
            cursorInner.style.backgroundColor="red"

            ////Se le da el color rojo al botón rojo
            colorBtn[i].style.backgroundColor="red"
        }

        ////Si es el botón verde (.color__btn[1])
        else if(i === 1){

            ////A todos los componentes de la cola (.cursor__tail) se les aplica el color verde y se les añade la clase 'active' para que sean visibles
            cursorTail.forEach(function(eachTail,j){
                cursorTail[j].classList.add('active')
                cursorTail[j].style.backgroundColor="lime"
            })
            
            ////Se les da un sombreado de rango variable del mismo color a los distintos elementos de la cola (.cursor__tail)
            cursorTail.forEach(function(eachTail,k){
                const tailRadius = ( k + 1 ) * 20
                cursorTail[k].style.boxShadow= `0 0 100px ${tailRadius}px lime`
            })

            ////Se le aplica el mismo color al circulo interior del puntero (.cursor__inner)
            cursorInner.style.backgroundColor="lime"

            ////Se le da el color verde al botón verde
            colorBtn[i].style.backgroundColor="lime"
        }

        ////Si es el botón razul (.color__btn[2])
        else{

            ////A todos los componentes de la cola (.cursor__tail) se les aplica el color azul y se les añade la clase 'active' para que sean visibles
            cursorTail.forEach(function(eachTail,j){
                cursorTail[j].classList.add('active')
                cursorTail[j].style.backgroundColor="blue"
                cursorTail[j].style.backgroundColor="blue"
            })
            
            ////Se les da un sombreado de rango variable del mismo color a los distintos elementos de la cola (.cursor__tail)
            cursorTail.forEach(function(eachTail,k){
                const tailRadius = ( k + 1 ) * 20
                cursorTail[k].style.boxShadow= `0 0 100px ${tailRadius}px blue`
            })

            ////Se le aplica el mismo color al circulo interior del puntero (.cursor__inner)
            cursorInner.style.backgroundColor="blue"

            ////Se le da el color azul al botón azul
            colorBtn[i].style.backgroundColor="blue"
        }

    })
})

////Cuando se hace click en el botón de borrado (.color__none) (click)
colorNone.addEventListener('click',function(){

    ////Se les quita la clase 'active' a todos los componentes de la cola (.cursor__tail) para que no sean visibles
    cursorTail.forEach(function(eachTail,i){
        cursorTail[i].classList.remove('active')
    })
    
    ////Se les quita el color a todos botones de color
    colorBtn.forEach(function(eachBtn,j){
        colorBtn[j].style.backgroundColor=""
    })

    ////Se les quita el color al circulo interior del puntero (.cursor__inner)
    cursorInner.style.backgroundColor=""

})



//-------------------------BOTÓN DE OJO---------------------//
// Función para que se visualicen los enlaces y puntos del grid para facilitar la navegación por la web:

////Definimos una constante para el botón de ojo (.eye__hide), un array de puntos de visualizacióon (.main__dot), un array de enlaces del grid (.main__a) y un array de imágenes de la esquina (.corner__img) del cual nos interesan los dos primeros elementos del array que son los relativos al botón de ojo
const eyeHide           = document.querySelector('.eye__hide')
let mainDot             = document.querySelectorAll('.main__dot')
let mainA               = document.querySelectorAll('.main__a')
let cornerImg           = document.querySelectorAll('.corner__img')


////Cuando se hace click en el botón de ojo (.eye__hide) (click)
eyeHide.addEventListener('click',function(){

    ////A todos los enlaces y puntos del grid se les intercambia la clase para ser visualizados (.dot__seen y .a__seen)
    mainDot.forEach(function(eachDot,i){
        mainDot[i].classList.toggle('dot__seen')
        mainA[i].classList.toggle('a__seen')
    })

    ////Si el primer punto de visualización (.main__dot[0]) tiene la clase para ser visualizado (.dot__seen) se cambian las dos imágenes del ojo cerrado por imágenes del ojo abierto
    if(mainDot[0].classList.contains("dot__seen")){
        cornerImg[0].src="./assets/icon-opened-eye-white.png"
        cornerImg[1].src="./assets/icon-opened-eye-black.png"
    }

    ////Si el primer punto de visualización (.main__dot[0]) no tiene la clase para ser visualizado (.dot__seen) se cambian las dos imágenes del ojo abierto por imágenes del ojo cerrado
    else{
        cornerImg[0].src="./assets/icon-closed-eye-white.png"
        cornerImg[1].src="./assets/icon-closed-eye-black.png"
    }
})