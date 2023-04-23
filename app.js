let firstNum = '';
let operator = '';
let currentNum = '';


//While firstNum = '';, function numberBtn. 


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

/*
const update = function (){
    console.log(firstNum)
    console.log(operator)
    console.log(currentNum)
}
*/

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






/* [ Equal/operate ] Equal functionality.
    Take the working expression as a string. Identify wherever it has any of the operators.
    Split the string at those points. Ex, 1 + 2 x 4 / 8 will equal ("1", "2", "4", "8"). Not quite what we want.
    Need to replace the operator strings with the actual operation methods. Need to also return all the string elements as an int.
    workingExpression.replace("characterToBeReplaced", "What to be replaced with"). Replace ("X", *) << would this work?
    If so, I get "1", +, "2", *, "4", / "8"
    Then need to turn strings into int.
*/

function add(){

    console.log();
}

function subtract(){

    console.log();  
}

function multiply(){

    console.log();
}

function divide(){

    console.log();
}

console.log();