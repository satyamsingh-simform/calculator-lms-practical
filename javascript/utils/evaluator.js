/**
 * @description the actual calculation is done by this fn
 */
export function calculatePostfix(postfix){
    let stack=[];

    for(let token of postfix){
        if(!isNaN(token)){
            stack.push(Number(token));
        } 
        else if(['sin','cos','tan'].includes(token)){
            let a=stack.pop();
            // convert degree radians
            let rad=a*Math.PI/180;

            switch(token){
                case 'sin': stack.push(Math.sin(rad)); break;
                case 'cos': stack.push(Math.cos(rad)); break;
                case 'tan': stack.push(Math.tan(rad)); break;
            }
        }
        else{
            if(stack.length<2)throw new Error('invalid expression');
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
    if(stack.length!==1) throw new Error('invalid operator');
    return stack[0];
}