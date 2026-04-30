import { elements } from "../ui/dom.js";
import {calculateResult} from "../utils/calculator.js";

let expression='';

//fn helps to handle diff diff button action of calculator
export function handleInput(value){
    //mapping 
    if(value === '×') value = '*';
    if(value === '÷') value = '/';

    //check btn click value is number or operator
    if(!isNaN(value) || ['+', '-', '*', '/'].includes(value)){
        expression += value;
        elements.currentVal.innerText=expression;
        return;
    }
    //check for equal to btn
    if (value === '='){
        try{
            const result=calculateResult(expression);
            elements.wholeExp.innerText=expression+'=';
            elements.currentVal.innerText=result;
            expression=result.toString();
        } 
        catch{
            elements.currentVal.innerText='Error';
            expression='';
        }
        return;
    }

    //deleting input
    if(value==='X'){
        expression = expression.slice(0, -1);
        elements.currentVal.innerText=expression;
        return;
    }
    //clearing the calculation area
    if(value==='C'){
        expression='';
        elements.currentVal.innerText='';
        elements.wholeExp.innerText='';
    }
}