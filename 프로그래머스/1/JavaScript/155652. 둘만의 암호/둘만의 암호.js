function solution(s, skip, index) {
    let answer = '';    
    const skipArr = skip.split("");
    for(let i = 0; i < s.length; i++){        
        let count = 0;
        let temp = s[i];
        while(count < index){
            if(!skipArr.includes(temp)){
                count++;
            }
            temp = String.fromCharCode(temp.codePointAt() + 1);            
            if(temp.codePointAt() > "z".codePointAt()){
                temp = "a";            
            }
        }
        // 지금 여기 위치에서 skipArr.includes(temp)가 true일 수 있음
        // 그런데 count는 index만큼 올라갔다면
        // temp의 문자는 상승해야하는데
        // 상승하지 못하고 while로 빠져나가게됨 (skipArr에 들어간 문자 값과 매칭이 되었지만 count는 모두 상승한 상태)
        // 이거 예외처리 해줘야함
        while(skipArr.includes(temp)){
            temp = String.fromCharCode(temp.codePointAt() + 1);
            if(temp.codePointAt() > "z".codePointAt()){
                temp = "a";            
            }
        }
        answer += temp;
    }
    return answer;
}