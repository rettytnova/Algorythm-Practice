function solution(n, m) {
    let answer = [];
    let a = n;
    let b = m;
    while(a % b > 0){
        let r;
        r = a % b;
        a = b;
        b = r;
    }
    answer[0] = b;
    answer[1] = n * m / b;
    return answer;
}