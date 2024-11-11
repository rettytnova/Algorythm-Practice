function solution(brown, yellow) {
    let answer = [];    
    let width;
    let height;
    // brown = 2x + 2y - 4
    // yellow = (x - 2) * (y - 2) = xy - 2x - 2y + 4
    // xy = brown + yellow
    
    const total = brown + yellow;
    for(let i = 3; i * i <= brown + yellow; i++){
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