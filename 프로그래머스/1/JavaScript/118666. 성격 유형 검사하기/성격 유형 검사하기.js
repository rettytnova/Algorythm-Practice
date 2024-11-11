function solution(survey, choices) {
    let answer = '';
    const strArr = ["RT", "TR", "CF", "FC", "JM", "MJ", "AN", "NA"];
    const scoreArr = Array(8).fill(0);
    
    // 검사 점수 기록
    for(let i = 0; i < survey.length; i++){
        const idx = strArr.findIndex((e) => e === survey[i]);
        scoreArr[idx] += choices[i] - 4;         
    }    
    
    // 점수 기록을 토대로 유형 판별
    for(let i = 0; i < scoreArr.length; i++){
        if(scoreArr[i] > scoreArr[i + 1]){
            answer += strArr[i][1];
        } else {
            answer += strArr[i][0];
        }        
        i++;        
    }
    
    
    return answer;
}