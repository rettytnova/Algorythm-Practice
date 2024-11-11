function solution(s) {
    let answer = [];
    
    for(let i = 0; i < s.length; i++){
        let distance = -1; // 중복되는 글자가 없어서 거리를 측정할 수 없다면 -1로 입력
        for(let j = i - 1; j >= 0; j--){
            if (s[i] === s[j]){
                distance = i - j; // 중복되는 글자 발견시 글자 간의 거리를 잰다. 이 때, j는 인덱스 내림차순으로 검색하므로 i에서 j를 뺀 값이 양의 정수가 된다.
                break;
            }
        }
        answer.push(distance);
    }
    return answer;
}