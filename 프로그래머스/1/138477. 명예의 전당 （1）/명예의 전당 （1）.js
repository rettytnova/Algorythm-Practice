function solution(k, score) {
  let answer = [];
  let scoreboard = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      scoreboard.push(score[i]);
      scoreboard.sort((a, b) => a - b);
    } else {
      for (let j = k - 1; j >= 0; j--) {
        if(score[i] > scoreboard[j]){
            const temp = score[i];
            score[i] = scoreboard[j];
            scoreboard[j] = temp;
        }
      }
    }    
    answer.push(scoreboard[0]);
  }
  return answer;
}
