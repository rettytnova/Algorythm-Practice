function solution(a, b, n) {
    let answer = 0;    
    const exchangeRatio = a / b;
    while(n >= a){
        const remainedBottle = n % a;
        const exchangeBottle = n - remainedBottle;        
        const receivedBottle = exchangeBottle / exchangeRatio;
        answer += receivedBottle;
        n = receivedBottle + remainedBottle;
    }
    return answer;
}

