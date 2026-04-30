export function parseExpression(expression){
    let tokens=expression.match(/\d+|[+\-*/]/g);
    return tokens;
}

