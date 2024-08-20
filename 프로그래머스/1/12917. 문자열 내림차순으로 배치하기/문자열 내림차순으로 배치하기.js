function solution(s) {
    let answer = '';
    let str = s.split('').sort((a, b) => {
        if(a > b){
            return -1;
        }
        if(a < b){
            return 1;
        }
        return 0;
    })
    for(let i=0; i < str.length; i++){
        answer += str[i];
    }
    return answer;
}