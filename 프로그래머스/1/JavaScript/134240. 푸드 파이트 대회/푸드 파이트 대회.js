function solution(food) {
    let answer = '';
    let frontString = '';
    let backString = '';
    
    for(let i = 1; i < food.length; i++){
        food[i] = Math.floor(food[i] / 2);
        console.log(food[i]);
        for(let j= 0; j < food[i]; j++){
            frontString += i;
        }
    }
    backString = frontString.split('').reverse().join('');
    answer = frontString + '0' + backString;
    return answer;
}