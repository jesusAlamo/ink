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

// Cuando hago CLICK en .header__btn,
//// TODOS .header__btn le REMOVE active
//// TODOS .main__section le REMOVE active
//// MISMO INDEX .main__section le ADD active
//// MISMO INDEX .header__btn le ADD active

const headerBtn = document.querySelectorAll('.header__btn')
const mainSection = document.querySelectorAll('.main__section')

console.log(headerBtn)
console.log(mainSection)

headerBtn.forEach(function(eachBtn,i){

    headerBtn[i].addEventListener('click',function(){

        mainSection.forEach(function(eachSection, i){

            mainSection[i].classList.remove('active')
            headerBtn[i].classList.remove('active')

        })

        mainSection[i].classList.add('active')
        headerBtn[i].classList.add('active')

    })
})