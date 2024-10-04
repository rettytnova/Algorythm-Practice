// 전체 n, 잃은 사람 배열 lost, 체육복 여벌(1벌) 가진 사람 배열 reserve  -> lost reserve 겹치면 1벌가진 사람
function solution(n, lost, reserve) {    
    let answer = 0;
    const arr = Array(31).fill(0);
    const sortedLost = lost.sort((a, b) => a - b);
    lost.forEach((e)=>arr[e]--); // 잃어버리면 -1
    reserve.forEach((e)=>arr[e]++); // 여벌이 있는 번호는 잃어버려도 수업 참여가 가능하다 (더 빌리지 않음)
    
    let absStudent = 0; // 수업에 참여하지 못하는 인원
    
    sortedLost.forEach((num) =>{
    	if(arr[num] === -1) {
    		if(arr[num - 1] === 1){
                arr[num -1] = 0;
                arr[num] = 0;
            }
            else if(arr[num + 1] === 1){
                arr[num +1] = 0;
    		arr[num] = 0;  
            } else {
        	    // 빌리지 못한 인원 -> 수업에 참여하지 못함
    		    ++absStudent;
    	    }
    	} 
    })
    answer = n - absStudent;
    return answer;
}