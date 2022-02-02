const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
let displayNumber="";
let num1 = 0;
let num2 = 0;
let answer= 0;
let operator="";
let workingDigit="";

buttons.forEach(btn =>{
    btn.addEventListener("click",function(e){
       if (btn.classList[1]==="operator"){
        displayNumber=displayNumber+" " +btn.textContent+" ";
        operator = btn.textContent;
        num1 = parseInt(workingDigit);
        workingDigit= "";
        display.textContent=displayNumber

       } else if(btn.classList[1]==="clear"){
            clear();
            workingDigit="";
            display.textContent="";
       } else if(btn.classList[1] ==="equals") {
           equals(operator);

       } else {
           displayNumber+=btn.textContent;
           workingDigit+=btn.textContent;
           display.textContent=displayNumber

       };
       
    });
});

function addition(a,b){
    answer= a+b;
    workingDigit=answer
    display.textContent= answer;
    clear();
}

function subtract(a,b){
    answer= a-b;
    workingDigit=answer
    display.textContent= answer;
    clear();
}
function multiply(a,b){
    answer= a*b;
    workingDigit=answer
    display.textContent= answer;
    clear()
}

function divide(a,b){
    answer=a/b;
    workingDigit=answer
    display.textContent= answer; 
    clear();
}

function equals(oper){
    num2=parseInt(workingDigit);
    if (oper ==="+"){
        addition(num1,num2)
    } else if (oper === "-"){
        subtract*(num1,num2)
    } else if (oper=== "*"){
        multiply(num1, num2)
    } else if (oper==="/"){
        divide(num1, num2)
    } else {
        display.textContent="Error"
        console.log("error")
    };

}
function clear(){
    displayNumber="";
        operator = "";
        num1=""
        num2=""
        answer="";
        
}