function isPrime(num){
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
            return false;
        }
    }
    //console.log(num,'is Prime');
    return true;
}
function solution(nums) {
    let answer = 0;
    const sortedNums = nums.sort((a, b) => a - b);
    const length = nums.length;
    
    for(let a = 0; a < length - 2; a++ ){
        for(let b = a + 1; b < length - 1; b++){
            for(let c = b + 1; c < length; c++){
                const total = sortedNums[a] + sortedNums[b] + sortedNums[c];
                if(isPrime(total)) {
                    answer++;
                }
            }
        }
    }    
    return answer;
}