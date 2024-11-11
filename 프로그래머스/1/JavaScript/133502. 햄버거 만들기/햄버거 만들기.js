function solution(ingredient) {
    let answer = 0;
    const hamburger = "1231";
    let tempArr = [];
    ingredient.forEach((value, idx) => {
        tempArr.push(value);
        //console.log(idx+'번째 탐색 중:',tempArr);
        if(tempArr.length >= 4){
            const str = tempArr.slice(-4).join('');
            if(str === hamburger){
                for(let i = 0 ; i < 4; i++){
                    tempArr.pop();
                }
                answer++;
                //console.log('값을 찾았습니다 ->',tempArr);
            }
        }
    })
        
        
    
    return answer;
}