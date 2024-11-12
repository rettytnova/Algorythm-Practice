function solution(n,a,b)
{
    let count = 0;
    // a가 b와 같아지는 시간은 서로가 경기를 통해 겨룬 후 나눠지면서 같은 값이 될 때이다.
    while(a !== b){
        a = Math.round(a / 2); // 홀수일 경우 대결하는 상대방(짝수)로 취급해도 됨. (같은 경기이므로)
        b = Math.round(b / 2);
        count++;
    }
    return count;
}