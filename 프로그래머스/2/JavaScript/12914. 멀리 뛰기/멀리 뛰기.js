function solution(n) {
    let answer = 0;
    let before1 = 1;
    let before2 = 0;
    for(let i = 0; i < n; i++){
        answer  = before1 + before2; 
        before2 = before1 % 1234567; 
        before1 = answer % 1234567;
        answer = answer % 1234567;
    }
    return answer;
}
