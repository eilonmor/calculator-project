const numbers = document.getElementsByClassName('white')
console.log(numbers)
const listOfNumbers = []

for (let x of numbers){
    listOfNumbers.push(x.id)
}
console.log(listOfNumbers)

 let num1 = ""
 let num2 = ""
 let operator = ""
 let rightNowValue = ""
 let flag = false

//  function showOnscreen2(cr){
//     if (!flag) 
//  }

 function displayOnScreen(){
    let resultSTR = document.getElementById('res')
    resultSTR.innerHTML = num1 + operator + num2
 }

 function displayOnScreenAnswer(){
    if (rightNowValue.length ===0 ){
        let resultSTRR = document.getElementById('res')
        let history = document.getElementById('historyshow')
        let equalOutput = eval(num1 + operator + num2)
        resultSTRR.innerHTML = equalOutput
        history.innerText += '\n' + equalOutput;
        rightNowValue = equalOutput.toString()
    }
     }

const zeroToNingth = ['0','1','2','3','4','5','6','7','8','9','.'] 
let arrayOfNumbers =[] 
function setscreen(num){
    // while (num !== "=")
    // if (rightNowValue.length > 0){
    //     num1 = rightNowValue 
    //     operator = ""
    // } 
    if ((operator === "") && zeroToNingth.includes(num) && (rightNowValue.length === 0)){
        num1 += num 
        displayOnScreen()
    } else if ((num === "*"||num ==="+"||num ==="-"||num ==="/") && (num1.length > 0) && (operator===""|| operator.length == 1)){
        operator = num
        displayOnScreen()
        arrayOfNumbers.push(num1)
    }else if ((operator.length > 0) && zeroToNingth.includes(num)) {
        num2 += num
        displayOnScreen()
    }else if (num === "=") {
        rightNowValue = ""
        displayOnScreenAnswer()
        num1 = rightNowValue.toString()
        num2 = ""
        operator = ""
        displayOnScreen()
   }else if (num === 'c'){
        num1 = ""
        num2 = ""
        operator = ""
        rightNowValue =""
        displayOnScreen()
}
         
}

function back(){
    let ouputONscreen = (num1 + operator + num2)
    ouputONscreen = ouputONscreen.slice(0, -1)
    let resultSTRRR = document.getElementById('res')
    resultSTRRR.innerHTML = ouputONscreen
    if (num2.length>0){
        num2 = num2.slice(0, -1)
    }else if(operator.length > 0){
        operator = operator.slice(0, -1)
    }else if(num1.length>0){
        num1 = num1.slice(0, -1)
    }
}
 