"use strict"

let redcircle=document.getElementById("circle-1")
let yellowcircle=document.getElementById("circle-2")
let greencircle=document.getElementById("circle-3")
let timerclk=document.getElementById("timer")

let timer=0
let color1=10
let color2=5
let color3=10

function timeRun()
{
    if(timer<11)
    {   

        redcircle.classList.add('red');
        greencircle.classList.remove("green")

        // redcircle.style.backgroundColor="red"
        // yellowcircle.style.backgroundColor=""
        // greencircle.style.backgroundColor=""

        timerclk.innerText=color1
        color1--
    }

    else if(timer>11 && timer<=17)
    {
        redcircle.classList.remove('red');
        yellowcircle.classList.add('yellow');

        // redcircle.style.backgroundColor=""
        // yellowcircle.style.backgroundColor="yellow"
        // greencircle.style.backgroundColor=""

        timerclk.innerText=color2
        color2--
    }

    else if(timer>17 && timer<=28)
    {
        yellowcircle.classList.remove('yellow');
        greencircle.classList.add('green');

        // redcircle.style.backgroundColor=""
        // yellowcircle.style.backgroundColor=""
        // greencircle.style.backgroundColor="green"
        
        timerclk.innerText=color3
        color3--
    }

    if(timer==28)
    {
        timer=0;
        color1=10;
        color2=5;
        color3=10;
    }
    timer++
}
setInterval(timeRun,700)

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

