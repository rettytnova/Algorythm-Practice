const solution = (X,Y)=> {
    const arr = Array(10).fill(0);
    const arr2 = Array(10).fill(0);
    [...X].forEach(i=>arr[i]++);
    [...Y].forEach(i=>arr2[i]++);
    let answer = []
    arr.forEach((num,idx)=>{
        const result = Math.min(num,arr2[idx])
        Array(result).fill(undefined).forEach(i=>answer.push(idx))
    })
    answer = answer.sort((a,b)=>b-a).join('')
    return answer[0] == 0 ? '0' : answer || '-1'
}