"use strict"
let redcircle=document.getElementById("circle-1")
let yellowcircle=document.getElementById("circle-2")
let greencircle=document.getElementById("circle-3")
let timerclk=document.getElementById("timer")

let timer=0;
function timeRun()
{
    timer+=1
    if(timer<=20)
    {
        timerclk.innerText=timer
    }
    else
    {
        timer=0;
        timerclk.innerText=timer
    }

    if(timer==1)
    {
        redcircle.style.backgroundColor='red'
        greencircle.style.backgroundColor=''
    }
    else if(timer==8)
    {
        yellowcircle.style.backgroundColor='yellow'
        redcircle.style.backgroundColor=''
    }
    else if(timer==16)
    {
        greencircle.style.backgroundColor='green'
        yellowcircle.style.backgroundColor=''
    }
}
setInterval(timeRun,1000)

//----------------------mouseover--------------------------

// let value=document.getElementById("circle-1")
// let value2=document.getElementById("circle-2")
// let value3=document.getElementById("circle-3")

// value.addEventListener("mouseover",circle1)
// value2.addEventListener("mouseover",circle2)
// value3.addEventListener("mouseover",circle3)

// function circle1()
// {
//     value.style.backgroundColor='red'
//     value2.style.backgroundColor='gray'
//     value3.style.backgroundColor='gray'
// }

// function circle2()
// {
//     value2.style.backgroundColor='yellow'
//     value.style.backgroundColor='gray'
//     value3.style.backgroundColor='gray'
// }

// function circle3()
// {
//     value3.style.backgroundColor='green'
//     value2.style.backgroundColor='gray'
//     value.style.backgroundColor='gray'
// }

// value.addEventListener("mouseout",blankFunction)
// value2.addEventListener("mouseout",blankFunction)
// value3.addEventListener("mouseout",blankFunction)

// function blankFunction()
// {
//     value.style.backgroundColor=''
//     value2.style.backgroundColor=''
//     value3.style.backgroundColor=''
// }

