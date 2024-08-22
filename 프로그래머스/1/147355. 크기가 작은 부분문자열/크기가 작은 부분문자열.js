function solution(t, p) {
    let answer = 0;
    for(let i = 0; i < t.length - p.length + 1; i++){
        let count = 0; // p의 글자수만큼 매칭포인트를 만들어놓고 모든 것이 조건에 매칭되면 0이되도록
        let correct = false;        
        let j = 0;
        while(!correct && j < p.length){ //p의 문자열과 t(부분문자열)을 비교하기 위한 반복문
            if(p[j] > t[i+j]){ // p의 숫자가 t보다 클 경우 true이므로 더 이상 비교할 필요 없음
                correct = true;
                break;
            }else if(p[j] === t[i+j]){ // p와 t가 같으면 다음 인덱스의 값을 비교해봐야 함
                count++;
            }else{ // 작으므로 더 이상 비교할 필요 없음
                break;
            }
            j++;
        }
        if(correct || count === p.length){
            answer++;
        }
    }    
    return answer;
}