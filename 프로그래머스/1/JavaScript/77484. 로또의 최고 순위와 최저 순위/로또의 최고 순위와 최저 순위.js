function solution(lottos, win_nums) {
    let answer = [];
    let score = 0;
    let bonusScore = 0;
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0){
            bonusScore++;
        }
        if(win_nums.find((e) => e === lottos[i])){
            score++;
            console.log(lottos[i]);
        }
    }
    
    answer.push(score + bonusScore);
    answer.push(score);
    for(let i = 0; i < 2; i++){
        if(answer[i] < 2){
            answer[i] = 6;
        } else {
            answer[i] = 7 - answer[i];
        }
    }
    return answer;
}