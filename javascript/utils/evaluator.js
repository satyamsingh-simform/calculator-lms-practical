export function calculatePostfix(postfix){
    let stack=[];

    for(let token of postfix){
        if(!isNaN(token)){
            stack.push(Number(token));
        } 
        else{
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
    
    return stack[0];
}