import { PRECEDENCE, TRIGO_FUN } from "../constant.js";

/**
 * @description convert the given expression to postfix
 */
export function convertToPostfix(tokens){
    let output=[];
    let stack=[];

    for(let token of tokens){
        if(!isNaN(token)){
            output.push(token);
        }
        else if(TRIGO_FUN.includes(token)) stack.push(token);
        else if(token==='(') stack.push(token);
        else if(token===')'){
            while(stack.length && stack[stack.length-1]!=='('){
                output.push(stack.pop());
            }
            //remove the '('
            stack.pop();
            if(stack.length&&TRIGO_FUN.includes(stack[stack.length-1]))
                output.push(stack.pop());
        }
        else{
            while(stack.length && PRECEDENCE[stack[stack.length-1]]>=PRECEDENCE[token]){
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