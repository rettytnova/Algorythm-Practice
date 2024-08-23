function solution(s) {
    let answer = s;
    let numberArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<numberArr.length; i++){
        answer = answer.replaceAll(numberArr[i], String(i));
    }
    return Number(answer);
}