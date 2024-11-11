function solution(answers) {
    let returnAnswer = [];
    let score = [0, 0, 0];
    const persons = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    for(let i= 0; i< answers.length; i++){
        const first = persons[0][i % 5];
        const second = persons[1][i % 8];
        const third = persons[2][i % 10];
        if(answers[i] === first){
            score[0]++;
        }
        if(answers[i] === second){
            score[1]++;
        }
        if(answers[i] === third){
            score[2]++;
        }
    }
    const maxValue = Math.max(...score);
    for(let i = 0; i < 3; i++){
        if(maxValue === score[i]){
            returnAnswer.push(i + 1);
        }
    }
    return returnAnswer;
}