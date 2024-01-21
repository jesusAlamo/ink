'use strict'

/*--------------------------------------------------------------*\
*inktober.js
*   Interacciones:
*       - Animaciones, efectos y muestreo de los diferentes lightboxes del archivo inktober.html asociado
*   Estructura:
*       - Bloques de funcionalidades:
*           > Constantes y variables
*           > Funciones
*---------------------------------------------------------------*/

//Limpiamos la consola
console.clear()

//-------------------------CIRCULO Y COLA COMO PUNTERO---------------------//
// Función para que el .cursor y su cola formada por un conjunto/array de .cursor__tail sigan al puntero mediante le valor devuelto (return) por la función MouseMove, la cual, entre otras cosas, nos ofrece la posición del puntero en la pantalla (CUIDADO CON ESTO porque no da la posición dentro de un elemento de la web (div/a/button/..) o al menos, no lo he conseguido encontrar o implementar. Entiendo que con alguna de las propiedades de MouseEvent se podría llegar a lograr (https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)):

////Definimos una constante para el circulo (.cursor) y un array de circulos de cola (.cursor__tail)
const cursor                = document.querySelector('.cursor')
let cursorTail            = document.querySelectorAll('.cursor__tail')

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

////Definimos un array de botones de selección de colores (.oclor__btn), una constante para el botón de borrado (.color__none), una constante para el circulo interior del puntero que muestra el color escogido (.cursor__inner) y un array de celdas de grid correspondiente con el día del inktober (.main__cell)
let colorBtn          = document.querySelectorAll('.color__btn')
const colorNone         = document.querySelector('.color__none')
const cursorInner       = document.querySelector('.cursor__inner')
let mainCell          = document.querySelectorAll('.main__cell')


colorBtn.forEach(function(eachBtn,i){

    ////Cuando se hace click en un botón (click)
    colorBtn[i].addEventListener('click',function(){

        ////Se les quita el color a todos botones
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

            ////Se le da el mismo color al sombreado de selección de día del inktober (.main__cell)
            mainCell.forEach(function(eachCell,k){
                if(k > 12 && k < 44){
                mainCell[k].style.backgroundColor="red"
                }
            })
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

            ////Se le da el mismo color al sombreado de selección de día del inktober (.main__cell)
            mainCell.forEach(function(eachCell,k){
                if(k > 12 && k < 44){
                mainCell[k].style.backgroundColor="lime"
                }
            })
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

            ////Se le da el mismo color al sombreado de selección de día del inktober (.main__cell)
            mainCell.forEach(function(eachCell,k){
                if(k > 12 && k < 44){
                mainCell[k].style.backgroundColor="blue"
                }
            })
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

    ////Se le quita el color al sombreado de selección de día del inktober (.main__cell)
    mainCell.forEach(function(eachCell,k){
        if(k > 12 && k < 44){
        mainCell[k].style.backgroundColor=""
        }
    })
})



//----------------VISUALIZACIÓN DE LIGHTBOXES---------------------//
// Función para mostrar y ocultar el lightbox que se visualiza al pulsar el día al que corresponde:

////Definimos un array de botones de selección de día del inktober (.main__number), un array de lightbox (.main__lightbox) y un array de botones cierre de lightbox (.lightbox__btn)
let mainNumber        = document.querySelectorAll('.main__number')
let mainLightbox      = document.querySelectorAll('.main__lightbox')
let lightboxBtn       = document.querySelectorAll('.lightbox__btn')

mainNumber.forEach(function(eachNumber,i){

    ////Cuando se hace click en uno de los días del inktober (.main__number) (click)
    mainNumber[i].addEventListener('click',function(){

        ////Se le añade la clase active al lightbox relaccionado con el día clickado
        mainLightbox[i].classList.add('active')

        ////Cuando se hace click en el botón de cierre de lightbox correspondiente (.lightbox__btn) (click)
        lightboxBtn[i].addEventListener('click',function(){

            ////Se le quita la clase active al lightbox relaccionado con el día clickado
            mainLightbox[i].classList.remove('active')
        })
    })
})