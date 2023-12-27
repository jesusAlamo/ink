'use strict'

console.clear()

const cursor = document.querySelector('.cursor')

console.log( cursor )

    window.addEventListener( 'mousemove' , function( e ){

        console.log( 'e.clientX' )
        console.log( e.clientX )
        console.log( 'e.clientY' )
        console.log( e.clientY )

        const cursorX = e.clientX - 25
        const cursorY = e.clientY - 25

        console.log( 'cursorX' )
        console.log( cursorX )
        console.log( 'cursorY' )
        console.log( cursorY )

        // cursor.style.transform = 'translateX('+cursorX+'px) translateY('+cursorY+'px)'
        cursor.style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`

    })