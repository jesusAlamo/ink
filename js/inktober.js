'use strict'

console.clear()

const cursor = document.querySelector('.cursor')

console.log( cursor )

    window.addEventListener( 'mousemove' , function( e ){

        console.clear()

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

const mainNumber        = document.querySelector('.main__number')
const mainLightbox      = document.querySelector('.main__lightbox')
const lightboxBtn       = document.querySelector('.lightbox__btn')

console.log( mainNumber )
console.log( mainLightbox )
console.log( lightboxBtn )

mainNumber.addEventListener('click' , function(){
    mainLightbox.classList.add('active')
})

// Cuando hago CLICK en .lightbox__btn, 
//.main__lightbox LE REMOVE active

lightboxBtn.addEventListener('click' , function(){
    mainLightbox.classList.remove('active')
})