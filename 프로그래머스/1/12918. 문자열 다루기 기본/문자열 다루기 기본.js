function solution(s) {
    let answer = false;
    if(s.length === 4 || s.length === 6){
        for(let i=0; i< s.length; i++){
            if(s[i].charCodeAt() < 48 || s[i].charCodeAt() > 57){
                console.log("b.o.",s[i]);
                return false;
            }
        }
        return true;
    }
    console.log("길이가 다릅니다");
    return answer;
}