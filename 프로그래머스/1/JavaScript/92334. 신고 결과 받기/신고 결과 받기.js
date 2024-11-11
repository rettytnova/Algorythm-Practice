function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    const numMap = new Map(); // id와 숫자를 매칭시킬 해쉬테이블 ex> id_list = [muzi, frodo] , numMap = [muzi => 0, frodo => 1]
    const arr = []; // 신고한 id가 어떤 id들을 신고했는 지 담아낼 배열
    const total = Array(id_list.length).fill(0); // 신고당한 id가 얼마나 신고당했는 지를 담아낼 배열
    
    
    id_list.forEach((e, idx)=> {
        numMap.set(e, idx);
        arr.push([]);
    })

    // 신고 내역 저장
    report.forEach((e) => {
        const temp = e.split(" ");
        const idNum = numMap.get(temp[0]);
        const reportNum = numMap.get(temp[1]);
        
        arr[idNum].push(reportNum);                
    })    

    // 신고당한 횟수 저장
    arr.forEach((e) => {
        // 중복 제거
        const idSet = new Set(e);
        const dupArr = [...idSet];        
        for(let i = 0; i < dupArr.length; i++){
            total[dupArr[i]]++;
        }
    })    

    total.forEach((e, idx) => {
        if(e >= k){
            for(let i = 0; i < arr.length; i++){
                // 여기서 i는 신고자 id를, idx는 신고당한 id를 의미함
                if(arr[i].includes(idx)){
                    answer[i]++;
                }
            }         
        }
    })
    return answer;
}