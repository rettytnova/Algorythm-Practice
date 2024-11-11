function solution(number, limit, power) {
    let answer = 0;    
    for(let i = 0; i < number; i++){
        let weight = 0;
        //해당 기사단원의 번호의 제곱근
        const intI = Math.sqrt(i + 1); 
        
        //제곱근까지만 약수를 찾음
        for(let j = 1; j <= Math.floor(intI); j++){ 
            if((i + 1) % j === 0){ 
                //약수 찾기
                weight++;    
            }
        }
        //약수를 찾았다면 해당 약수와 곱했을 때 기사단원의 번호가 되는 약수까지 계산함 (2배로 더해주기)
        weight *= 2; 
        //제곱근이 정수라면 제곱근인 약수는 1개인데 약수의 갯수를 2배곱으로 더해준 상태이므로 하나 빼야 함
        if(Math.floor(intI)===intI){
            weight--;
        }
        if(weight > limit){
            weight = power;
        }
        answer += weight;
    }    
    return answer;
}