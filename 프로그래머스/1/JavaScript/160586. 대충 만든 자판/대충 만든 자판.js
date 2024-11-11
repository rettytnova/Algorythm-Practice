function solution(keymap, targets) {
    // keymap : 키보드 자판 , targets : 쳐야하는 문자열 배열
    let answer = [];
    let keyMap = new Map();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(letter of alphabet){
        keyMap.set(letter, 0);
    }
    for(str of keymap){        
        for(let i = 0; i < str.length; i++){            
            if(keyMap.get(str[i]) > i + 1 || keyMap.get(str[i]) === 0){                
                keyMap.set(str[i], i + 1);                
            }
        }
    }    
    for(str of targets){
        let count = 0;
        for(letter of str){
            count += keyMap.get(letter);
            if(keyMap.get(letter) === 0){
                count = -1;
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}