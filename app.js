let firstNum = '';
let operator = '';
let currentNum = '';

let workingExpression = document.getElementById("workingExpression");

// [ AC ]Clears workingExpression string
const allClear = document.getElementById("allClear");
    allClear.addEventListener('click', function(){
        workingExpression.textContent = '';
        firstNum = '';
        operator = '';
        currentNum = '';
        })

// [ C ] Removes most recent character from working Expression
const clear = document.getElementById("clear");
    clear.addEventListener('click', function(){
        workingExpression.textContent = workingExpression.textContent.slice(0, -1)

    })

// [ numberBtns ] Assigns each numberBtn their respective value as a string, later turned into an int value
const numberBtn = document.getElementsByClassName("numberBtn");
    for (let i = 0; i < numberBtn.length; i++){
        numberBtn[i].addEventListener('click', function(){
            const text = this.textContent;
            workingExpression.textContent += text;

        })
    }

// [ operatorBtns ] Assigns operator functionality. Finalizes "firstNum," begins collecting currentNum
const operatorBtn = document.getElementsByClassName("operatorBtn");
    for (let i = 0; i < operatorBtn.length; i++){
        operatorBtn[i].addEventListener('click', function(){
            firstNum = workingExpression.textContent
            const text = this.textContent;
            operator = text.replace("x", '*').replace('÷', '/');
            workingExpression.textContent += operator;

        })
    }

const equal = document.getElementById("equal");
equal.addEventListener('click', function(){
    calculate()

    workingExpression.textContent = firstNum;
})

function calculate(){
    let afterOperator = workingExpression.textContent.indexOf(operator);
    currentNum = Number(workingExpression.textContent.substring(afterOperator + operator.length));
    firstNum = Number(firstNum);

    console.log(operator + 'operator')
    console.log(afterOperator + 'afterOperator')
    console.log(firstNum + 'firstNum')
    console.log(currentNum + 'currentNUm')

    if (operator === '+'){
        firstNum += currentNum;
    } else if (operator === '-'){
        firstNum -= currentNum;
    } else if (operator === '*'){
        firstNum *= currentNum;
    } else
        firstNum /= currentNum;

        console.log(currentNum)
}