let rightSection=document.querySelector('.section-right')
let leftSection=document.querySelector('.section-left')
let hamberger=document.querySelector('.hamberger')
let cross=document.querySelector('.cross-svg')

hamberger.addEventListener('click',()=>{
    rightSection.className='d-flex';
    console.log('class added');
    console.log(rightSection);
    leftSection.className='d-none'
})

cross.addEventListener('click',()=>{
    rightSection.className='section-right';
    leftSection.className='section-left'
})


let display = document.querySelector('.calculation-area');
let buttons = document.querySelectorAll('.calculator-btn');
let currentVal = document.querySelector('.current-expression');
let wholeExp = document.querySelector('.whole-expression');

let expression='';

function token(expression){
    console.log(expression);
    let tokens=expression.match(/\d+|[+\-*/]/g);
    console.log(tokens);
    return tokens;
}

function convertToPostfix(tokens){
    let output=[];
    let stack=[];

    const precedence={
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }

    for(let token of tokens){
        if(!isNaN(token)){
            output.push(token);
        }
        else{
            while(stack.length && precedence[stack[stack.length-1]] >= precedence[token]){
                output.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while(stack.length){
        output.push(stack.pop());
    }

    return output;
}

function calculatePostfix(postfix){
    let stack=[];

    for(let token of postfix){
        if(!isNaN(token)){
            stack.push(Number(token));
        } 
        else{
            let b=stack.pop();
            let a=stack.pop();

            switch(token){
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }

    return stack[0];
}

function calculateResult(expression){
    let tokens=token(expression);
    let postfix=convertToPostfix(tokens);
    let result=calculatePostfix(postfix);
    return result;
}

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let value = btn.innerText;

        //maping symbol
        if(value === '×') value = '*';
        if(value === '÷') value = '/';

        //numbers & operators
        if(!isNaN(value) || ['+', '-', '*', '/'].includes(value)){
            expression=expression+value;
            currentVal.innerText=expression;
        }

        if(value=== '='){
            try{
                let result=calculateResult(expression);
                wholeExp.innerText=expression +'=';
                currentVal.innerText=result;
                expression=result.toString();
            }
            catch(e){
                currentVal.innerText='Error';
                expression='';
            }
        }
        //delete each char
        if(value==='X'){
            expression=expression.slice(0,-1);
            currentVal.innerText=expression;
        }
        //clear
        if(value==='C'){
            expression = '';
            currentVal.innerText = '';
            wholeExp.innerText = '';
        }
    });
});


