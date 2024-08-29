function solution(numbers) {
    const newSet = new Set();
    let newArray = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            newSet.add(numbers[i] + numbers[j]);
        }
    }
    newArray = [...newSet];
    for(let i = 0; i < newArray.length; i++){
        newArray[i] = Number(newArray[i]);
    }
    newArray.sort((a,b)=>a - b); 
    return newArray;
}