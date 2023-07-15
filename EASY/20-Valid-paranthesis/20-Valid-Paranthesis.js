var isValid = function(s) {
    if(s.length%2!=0) return false;
    let stack = [];
    
    for(let i=0; i< s.length; i++){
        stack.push(s[i])
        let len = stack.length-1;
        if((stack[len-1]=='{' && stack[len]=='}') ||  
            (stack[len-1]=='[' && stack[len]==']') ||
            (stack[len-1]=='(' && stack[len]==')') && len>0)
        {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length? false: true
};