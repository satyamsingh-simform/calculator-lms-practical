import { calculatePostfix } from "./evaluator.js";
import { parseExpression } from "./parser.js";
import { convertToPostfix } from "./postfix.js";

export function calculateResult(expression){
    let tokens=parseExpression(expression);
    let postfix=convertToPostfix(tokens);
    let result=calculatePostfix(postfix);
    return Number(result.toFixed(3));;
}