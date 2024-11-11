function solution(n) {
    let answer = 0;
    let str = '';
    let val = 1;
    while(n > 0){
        if(n % 3){
            str += String(n % 3); 
        }else{
            str += '0'; // 나머지 없으면 0으로
        }
        n = Math.floor(n / 3);
    }
    console.log('str:',str);
    for(let i = str.length - 1; i >= 0; i--){
        answer += str[i] * val;
        val *= 3;
        console.log('answer:', answer);
    }
    return answer;
}