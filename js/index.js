'use strict'

// console.clear()

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

const cursorTail = document.querySelectorAll('.cursor__tail')

console.log( cursorTail )

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

        cursorTail.forEach(function(eachCursor, i){
            cursorTail[i].style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)`
        })
    })

//----------------------------------REVISAR Y RETOCAR---------------------//
// Cuando hago CLICK en .color__btn,
//// TODOS .cursor__tail le REMOVE active
//// MISMO INDEX .cursor__tail le ADD active
//// MISMO INDEX .color__btn IF ELSE en segundas clases para aplicar efecto en .cursor__tail (.cursor__tail ==> opacity: 1)


const colorBtn        = document.querySelectorAll('.color__btn')
const colorNone        = document.querySelector('.color__none')
const cursorInner      = document.querySelector('.cursor__inner')

console.log( colorBtn)
console.log( colorNone)
console.log( cursorTail )
console.log( cursorInner )

    colorBtn.forEach(function(eachBtn,i){

        colorBtn[i].addEventListener('click',function(){

            if(i === 0){
                cursorTail.forEach(function(eachTail,j){
                    cursorTail[j].classList.add('active')
                    cursorTail[j].style.backgroundColor="red"
                })
                cursorTail[0].style.boxShadow="0 0 100px 20px red"
                cursorTail[1].style.boxShadow="0 0 100px 40px red"
                cursorTail[2].style.boxShadow="0 0 100px 60px red"
                cursorTail[3].style.boxShadow="0 0 100px 80px red"
                cursorTail[4].style.boxShadow="0 0 100px 100px red"
                cursorInner.style.backgroundColor="red"
                colorBtn[0].style.backgroundColor="red"
                colorBtn[1].style.backgroundColor=""
                colorBtn[2].style.backgroundColor=""
            }
            else if(i === 1){
                cursorTail.forEach(function(eachTail,j){
                    cursorTail[j].classList.add('active')
                    cursorTail[j].style.backgroundColor="lime"
                })
                cursorTail[0].style.boxShadow="0 0 100px 20px lime"
                cursorTail[1].style.boxShadow="0 0 100px 40px lime"
                cursorTail[2].style.boxShadow="0 0 100px 60px lime"
                cursorTail[3].style.boxShadow="0 0 100px 80px lime"
                cursorTail[4].style.boxShadow="0 0 100px 100px lime"
                cursorInner.style.backgroundColor="lime"
                colorBtn[0].style.backgroundColor=""
                colorBtn[1].style.backgroundColor="lime"
                colorBtn[2].style.backgroundColor=""
            }
            else{
                cursorTail.forEach(function(eachTail,j){
                    cursorTail[j].classList.add('active')
                    cursorTail[j].style.backgroundColor="blue"
                    cursorTail[j].style.backgroundColor="blue"
                })
                cursorTail[0].style.boxShadow="0 0 100px 20px blue"
                cursorTail[1].style.boxShadow="0 0 100px 40px blue"
                cursorTail[2].style.boxShadow="0 0 100px 60px blue"
                cursorTail[3].style.boxShadow="0 0 100px 80px blue"
                cursorTail[4].style.boxShadow="0 0 100px 100px blue"
                cursorInner.style.backgroundColor="blue"
                colorBtn[0].style.backgroundColor=""
                colorBtn[1].style.backgroundColor=""
                colorBtn[2].style.backgroundColor="blue"
            }

        })
    })

    colorNone.addEventListener('click',function(){

        cursorTail.forEach(function(eachTail,i){
            cursorTail[i].classList.remove('active')
        })
        cursorInner.style.backgroundColor=""
        colorBtn[0].style.backgroundColor=""
        colorBtn[1].style.backgroundColor=""
        colorBtn[2].style.backgroundColor=""

    })

const eyeHide = document.querySelector('.eye__hide')
const mainDot = document.querySelectorAll('.main__dot')
const mainA = document.querySelectorAll('.main__a')
const cornerImg = document.querySelectorAll('.corner__img')

console.log(eyeHide)
console.log(mainDot)
console.log(mainA)
console.log(cornerImg)

    eyeHide.addEventListener('click',function(){
        mainDot.forEach(function(eachDot,i){
            mainDot[i].classList.toggle('dot__seen')
            mainA[i].classList.toggle('a__seen')
        })
        if(mainDot[0].classList.contains("dot__seen")){
            cornerImg[0].src="./assets/icon-opened-eye-white.png"
            cornerImg[1].src="./assets/icon-opened-eye-black.png"
        }
        else{
            cornerImg[0].src="./assets/icon-closed-eye-white.png"
            cornerImg[1].src="./assets/icon-closed-eye-black.png"
        }
    })