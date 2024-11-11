function solution(s) {
    let answer ='';
    let seq = 0;
    for(let i =0; i< s.length; i++){
        if(s[i] !== ' '){
            if(seq % 2){
                answer += s[i].toLowerCase();
            }else{
                answer += s[i].toUpperCase();
            }
            seq++;
        }else{            
            answer += s[i];
            seq = 0;
        }
    }
    return answer
}