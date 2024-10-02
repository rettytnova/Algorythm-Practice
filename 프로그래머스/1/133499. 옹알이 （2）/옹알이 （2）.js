

function solution(babbling) {
    let answer = 0;   
    const words = [ "aya", "ye", "woo", "ma" ];
    
    babbling.forEach((e) => {
        let str = e;
        let lastWordIndex = -1;
        console.log("------e:",e);
        while(str.length){
            let isCorrect = false;
            
            for(let i = 0; i < words.length; i++){
                const matchIndex = str.indexOf(words[i]);
                
                if(matchIndex === 0 && lastWordIndex !== i){       
                    str = str.slice(matchIndex + words[i].length);
                    lastWordIndex = i;
                    isCorrect = true;                    
                    break;
                }
            }
            if(!isCorrect){
                break;
            }
        }
        if(str.length === 0) {
            answer++;
        }
    })
    return answer;
}