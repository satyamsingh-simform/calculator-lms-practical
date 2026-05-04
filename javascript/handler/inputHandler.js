import { elements } from "../ui/dom.js";
import { renderHistory } from "../ui/historyUI.js";
import {calculateResult} from "../utils/calculator.js";
import { addToHistory } from "../utils/history.js";

let expression='';

/**
 * @description function helps to handle different button action of calculator
 */
export function handleInput(value){
    if(value === '×') value = '*';
    if(value === '÷') value = '/';

    if(!isNaN(value) || ['+', '-', '*', '/','(',')','sin','cos','tan'].includes(value)){
        expression+=value;
        elements.currentVal.innerText=expression;
        return;
    }
    //check for equal to btn
    if(value === '='){
        try{
            const result = calculateResult(expression);
            addToHistory(expression, result);
            elements.wholeExp.innerText = expression + '=';
            elements.currentVal.innerText = result;
            expression = result.toString();
            renderHistory();
        } 
        catch(e){
            elements.currentVal.innerText = 'invalid expression';
            expression = '';
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