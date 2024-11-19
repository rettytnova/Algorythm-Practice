function gcm(a, b){
    let r;
    while(a % b > 0){
        r = a % b;
        a = b;
        b = r;
    }
    return b;
}
function lcm(a, b){
    return a * b / gcm(a, b);
}

function solution(arr) {
    let answer = arr[0];
    for(let i = 1; i < arr.length; i++){        
        answer = lcm(answer, arr[i]);
    }        
    return answer;
}