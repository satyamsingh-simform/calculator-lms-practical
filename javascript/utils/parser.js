/**
 * @description parse the given expression
 */
export function parseExpression(expression){
    let tokens=expression.match(/sin|cos|tan|\d+|[()+\-*/]/g)||[];
    let result=[];
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i];
        if((token==='-'||token==='+')&&(i===0||tokens[i-1]==='(')){
            result.push('0');
        } 
        result.push(token);
    }
    return result;
}
