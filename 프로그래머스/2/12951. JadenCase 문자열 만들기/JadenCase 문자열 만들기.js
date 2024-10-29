function solution(s) {
    let answer = s.split("");
    let isSpace = true;
    for(let i = 0; i < answer.length; i++){
        const asciiNum = s.charCodeAt(i);        
        if(isSpace) {
            if (asciiNum > 96 && asciiNum < 123){                
                answer[i] = String.fromCharCode(asciiNum - 32);
            } 
            if (answer[i] !== ' '){
                isSpace = false;
            }
        } else if(answer[i] === ' '){
            isSpace = true;            
        } else if(asciiNum > 64 && asciiNum < 91){
            answer[i] = String.fromCharCode(asciiNum + 32);                        
        }
    }
    return answer.join("");
}