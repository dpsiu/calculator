/* 
Planning - 
1. Need functions for +, -, *, /
When a button is pressed, I want that logged as one of three variables in order.
firstNum
operator
secondNum
What do I want it logged as? 
Event listener => firstNum. create event listener for each button?
Expression needs to be blank, ready to take in the 3 variables. 
Answer then set to variable firstNum (unless clear button is pressed, 
    which, at any point, will clear working expression and be ready to
    recieve firstNum again.)

Needs a function that says if firstNum = ''; (empty), then add that string
Will firstNum and secondNum be arrays that are concatenated into their values?
This might be more optimal. firstNum and secondNum are arrays with each new #
pressed being appended to the array. Once operator or = is pressed respectively, 
the values are applied into the variables.

Walk through my own use with calculator?

 - Assigning numbers to values. After each expression,
    set operator and secondNum back to '':
- Once operator button class is set, set the first string of numbers to firstNum.
    then set operator button class to respective operator.
- SecondNum is set once = is pressed? WHich then sets the string as secondNum, 
    and performs firstNum operator secondNum followed by result.
*/

let firstNum = '';
let operator = '';
let secondNum = '';



const numberBtn = document.getElementsByClassName("numberBtn");
for (let i = 0; i < numberBtn.length; i++){
    numberBtn[i].addEventListener('click', function(){
        const text = this.textContent;
        firstNum += text;
        document.getElementById("workingExpression").textContent = firstNum;
    })
}



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