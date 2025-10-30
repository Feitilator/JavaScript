// let num = 42
// let firstName = "Skitter"
// const isProgrammer = true

// Can do
// let $ = 'test'
// let $num = 42
// let _ = 42
// let _num = 12
// let fisrt_name = 'Dsal' //bad
// let myNum = 34 //good
// let num42 = 10

//Restricted
// let 42num = 11
// let let = 31
// let conts = 31


// firstName = 'Max'
// isProgrammer = false

// alert(firstName)
// console.log("Test: ", firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 +1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

// const fullName = firstName + " " +"dallas"
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const sumbitBtn = document.getElementById('sumbit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'

// console.log(input1.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 49 - 7

plusBtn.onclick = function (){
    action = '+'
}

minusBtn.onclick = function (){
    action = '-' 
}

multiplicationBtn.onclick = function (){
    action = '*' 
}

divisionBtn.onclick = function (){
    action = '/' 
}

function printResult(result) {
    if(result < 0){
        resultElement.style.color = 'red'
    }else{
        resultElement.style.color = 'green' 
    }
    resultElement.textContent = result
}

function computeNumberWithAction(inp1,inp2,actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }else if(actionSymbol == '-') {
        return num1 - num2
    }else if (actionSymbol == '*'){
        return num1 * num2
    }else if (actionSymbol == '/'){
        return num1 / num2
    }
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

sumbitBtn.onclick = function (){
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result) 
    // if(action == '+'){
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)     
    // } else if(action == '-'){
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)      
    // }
}