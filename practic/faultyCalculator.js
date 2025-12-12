function faultyCalculator(a,b,operator){
    let faulty=Math.random();
    console.log(faulty);
    
    if(faulty<0.1){
        switch(operator){
            case '+':
            //add
                let x =a>b? (a-b):(b-a);
                console.log(x);
                break
            case '*':
            //multiplication
                let y=a+b;
                console.log(y);
                break
            case '-':
            //subtraction
                let z=a/b;
                console.log(z);
                break
            case '/':
            //division
                let w=a**b;
                console.log(w);
                break
            default:
                return NaN;
        }
    }
    else{
        switch(operator){
            case '-':
                let x =a>b? (a-b):(b-a);
            console.log(x);
            break
            case '+':
                let y=a+b;
                console.log(y);
                break
            case '/':
                let z=a/b;
                console.log(z);
                break
            case '*':
                let w=a*b;
                console.log(w);
                break
            default:
                return NaN;
        }

    }
}
faultyCalculator(3,4,'+');