function divisor(val){
    let num = 2;
    if(val === 1){
        return 1;
    }
    for(let i = 2; i<val;i++){
        if(val % i === 0){
            num++;
        }
    }    
    return num;
}
function solution(left, right) {
    let answer = 0;
    let num = 0;
    for(let i = left; i <= right; i++){
        num = divisor(i);
        if(num % 2 === 0){
            answer += i;
        }else{
            answer -= i;
        }
    }
    return answer;
}