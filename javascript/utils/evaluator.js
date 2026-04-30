export function calculatePostfix(postfix){
    let stack=[];

    for(let token of postfix){
        if(!isNaN(token)){
            stack.push(Number(token));
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