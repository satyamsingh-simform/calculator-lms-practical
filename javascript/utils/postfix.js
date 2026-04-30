import { PRECEDENCE } from "../constant.js";

export function convertToPostfix(tokens){
    let output=[];
    let stack=[];

    for(let token of tokens){
        if(!isNaN(token)){
            output.push(token);
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