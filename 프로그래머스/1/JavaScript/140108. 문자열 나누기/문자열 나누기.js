function solution(s) {
    let answer = 0;    
    let count = [0, 0];
    let peek = 0;
    let letter = "";
    const arr = s.split("");
    
    for(let i = 0; i < arr.length; i++){
        if (peek === i){
            letter = arr[i];
            count[0]++;
        } else if (letter === arr[i]){
            count[0]++;
        } else {
            count[1]++;
        }
        if (count[0] === count[1]){
            peek = i + 1;
            answer++;
        } 
    }
    if (count[0] !== count[1]){
        answer++;
    }
    return answer;
}