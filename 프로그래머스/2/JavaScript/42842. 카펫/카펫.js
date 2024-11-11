function solution(brown, yellow) {
    let answer = [];    
    let width;
    let height;
    
    const total = brown + yellow;
    for(let i = 3; i * i <= total; i++){
        if(total % i){
            continue;
        }
        width = total / i;
        if(width + i === brown / 2 + 2){
            height = i;    
            break;
        }        
    }
    
    answer.push(width);
    answer.push(height);
    return answer;
}
