function solution(s, n) {
    var answer = '';
    let arr = [];
    for(let i = 0; i < s.length; i++){
        arr[i] = s.charCodeAt(i);
        if(arr[i] > 64 && arr[i] < 91){
            if(arr[i] + n > 90){
                arr[i] += n - 26;
            }else{
                arr[i] += n;
            }
        }
        else if(arr[i] > 96 && arr[i] < 123){
            if(arr[i] + n > 122)   {
                arr[i] += n - 26;
            }else{
                arr[i] += n;
            }
        }
        answer += String.fromCharCode(arr[i]);
    }
    return answer;
}