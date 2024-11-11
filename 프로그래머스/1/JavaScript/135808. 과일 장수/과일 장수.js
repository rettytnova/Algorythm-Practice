function solution(k, m, score) {
    let answer = 0;    
    const sortedArr = score.sort();
    const firstIndex = Math.floor(score.length % m);
    const boxAmount = Math.floor(score.length / m);
    for(let i = 0; i < boxAmount; i++){
        answer += sortedArr[i * m + firstIndex] * m;        
    }
    return answer;
}