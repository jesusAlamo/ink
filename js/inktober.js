'use strict'

console.clear()

const cursor = document.querySelector('.cursor')

console.log( cursor )

    window.addEventListener( 'mousemove' , function( e ){

        // console.clear()

        // console.log( 'e.clientX' )
        // console.log( e.clientX )
        // console.log( 'e.clientY' )
        // console.log( e.clientY )

        const cursorX = e.clientX - 30
        const cursorY = e.clientY - 30

        console.log( 'cursorX' )
        console.log( cursorX )
        console.log( 'cursorY' )
        console.log( cursorY )

        // cursor.style.transform = 'translateX('+cursorX+'px) translateY('+cursorY+'px)'
        cursor.style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`

    })


    
// Cuando hago CLICK en .main__number, 
//.main__lightbox LE ADD active

// Cuando hago CLICK en .lightbox__btn, 
//.main__lightbox LE REMOVE active

const mainNumber        = document.querySelectorAll('.main__number')
const mainLightbox      = document.querySelectorAll('.main__lightbox')
const lightboxBtn       = document.querySelectorAll('.lightbox__btn')

console.log( mainNumber )
console.log( mainLightbox )
console.log( lightboxBtn )

mainNumber.forEach(function(eachNumber,i){

    mainNumber[i].addEventListener('click',function(){

        mainLightbox[i].classList.add('active')

        lightboxBtn[i].addEventListener('click',function(){

            mainLightbox[i].classList.remove('active')
    
        })

    })
})