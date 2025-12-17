/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = '';
/*------------------------ Cached Element References ------------------------*/
 const calculator = document.querySelector('#calculator');
 
 const display = document.querySelector('display')
 

/*----------------------------- Event Listeners -----------------------------*/
 calculator.addEventListener('click'),(event) =>{

console.log(event.target.innerText);
 }
/*----------------------- Functions --------------------------------*/

 if (event.target.classList.contains('number')) {
    secondNumber += event.target.innerText;
  display.innerText = secondNumber;
  }
 
  if (event.target.classList.contains('operator'))
    {
    firstNumber = secondNumber; operator =
    event.target.innerText; secondNumber = '';
  } 


  if (event.target.innerText === '='){
    const a = Number(firstNumber);
    const b = Number(secondNumber);
    let result; if(operator === '+') result = a + b; 
    if(operator === '-') result = a - b;
    if (operator === '*') result = a * b;
    if(operator === '/') result = a / b;
    display.innerText = result; secondNumber = result.toString(); firstNumber = ''; operator = '';
  }


  if(event.target.innerText === 'C'){
    firstNumber =  ''; secondNumber = ''; operator = ''; display.innerText = '0';
  }


  

