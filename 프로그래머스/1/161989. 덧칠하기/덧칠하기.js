function solution(n, m, section) {
    let answer = 0;
    // n : 총량 
    // m : 한 번 칠할 수 있는 범위
    // section : 칠해야 하는 낱개 배열
    // section[i]의 값에서부터 +m만큼 칠해지고 result++; -> 검색을 section[i]+m 부터 시작해야함
    let currentSection = 1; //n을 기준으로 절댓값수치로 매겨진 구역
    let i = 0; //section의 인덱스
    while (i < section.length){ //조건을 currentSection <= n 으로 하여도 상관없음.
        if(currentSection === section[i]){
            answer++;
            currentSection += m;
            while(currentSection > section[i]){
                i++;
            }
        }
        else{
            currentSection++;
        }
    }
    return answer;
}
