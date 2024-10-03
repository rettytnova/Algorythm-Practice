
function solution(X, Y) {
    let answer = "";
    // 짝꿍은 내림차순으로 정렬된 값이다.
    // 따라서 X, Y를 내림차순으로 정렬해 인덱스0부터 비교해가며 매칭되는 갯수만큼 문자열에 추가하면
    // 가장 큰 수를 문자열로 나타낼 수 있다.
    const sortedX = X.split("").sort((a, b) => b - a).join("");
    const sortedY = Y.split("").sort((a, b) => b - a).join("");
    const maxNumberOfX = sortedX[0];
    const maxNumberOfY = sortedY[0];
    let presentNumber = 0;
    let countX = 0;
    let countY = 0;    
    let indexX = 0;
    let indexY = 0;
    
    if (maxNumberOfX < maxNumberOfY){
        presentNumber = +maxNumberOfX;        
    } else {
        presentNumber = +maxNumberOfY;        
    }
    
    // 이 코드의 반복문 탐색횟수는 X.length + Y.length + (presentNumber * 2)이다. 
    while(presentNumber >= 0){
        let search = true;
        
        while (search){
            if (presentNumber < +sortedX[indexX]){
                indexX++;
            }
            else if (presentNumber == sortedX[indexX]){
                indexX++;
                countX++;
            }
            else {
                search = false;
            }
        }
        
        search = true;
        
        while (search){
            if (presentNumber < +sortedY[indexY]){
                indexY++;
            }
            else if (presentNumber == sortedY[indexY]){
                indexY++;
                countY++;
            }
            else {
                search = false;
            }
        }        
        if (countX || countY){
            const count = (countX > countY) ? countY : countX;
            for (let i = 0; i < count; i++){
                answer += presentNumber;
            }            
            countX = 0;
            countY = 0;
        }
        presentNumber--;
    }
    if (answer.length === 0){
        answer += "-1";
    } else if( answer[0] === "0"){
        answer = "0";
    }
    return answer;
}