function solution(n) {
    let answer = '';
    let bool = true;
    for(let i = 0; i < n; i++){
        if(bool){
            bool = false;
            answer += '수';
        }else{
            bool = true;
            answer += '박';
        }
    }
    return answer;
}