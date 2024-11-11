function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){        
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a, b)=>{
            if(a > b){
                return 1;
            }else if(a < b){
                return -1;
            }
        }));
    }
    
    for(let i = 0; i < commands.length; i++){
        answer[i] = answer[i][commands[i][2] -1];
    }
    return answer;
}