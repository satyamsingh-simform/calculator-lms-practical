// export function parseExpression(expression){
//     let tokens=expression.match(/\d+|[+\-*/]/g);
//     return tokens;
// }

export function parseExpression(expression){
    let tokens=expression.match(/\d+|[()+\-*/]/g)||[],result=[];
    for(let i=0;i<tokens.length;i++){
        let token=tokens[i];
        if((token==='-'||token==='+')&&(i===0||tokens[i-1]==='(')) result.push('0');
        result.push(token);
    }
    return result;
}
