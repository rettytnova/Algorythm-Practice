function solution(today, terms, privacies) {
    let answer = [];
    const pr1 = []; // 수집 일자를 담을 배열, today와 비교
    const pr2 = []; // 약관 종류를 담을 배열, pr1의 유효기간을 terms에 담긴 데이터에 따라 증가시킬 값 담음
    
    // privacies 배열에 담긴 문자열을 각각의 수집일자, 약관종류 배열로 나누기
    privacies.forEach((e)=> {
        const temp = e.split(" ");
        //console.log(temp); // output : ["수입 일자", "약관 종류"]
        temp[0] = temp[0].split(".").map(Number);
        //console.log(temp[0]); // output : [ YY, MM, DD ] (숫자값)
        pr1.push(temp[0]); 
        pr2.push(temp[1]); 
    })

    // 약관 종류에 따라 pr1에 담긴 수집일자를 유효기간으로 바꿔주기
    pr2.forEach((e, idx) => {
        let isFind = false; // 아래의 while 루프를 활성화/비활성화할 플래그
        let i = 0; // terms를 순회
        while(!isFind){
            if(terms[i][0] === e){                
                const temp = terms[i].split(" ");
                e = Number(temp[1]);
                isFind = true;
            }            
            i++;
        }        
        pr1[idx][1] += e;
        
        if(pr1[idx][1] > 12){
            pr1[idx][0] += Math.floor(pr1[idx][1] / 12);
            pr1[idx][1] = pr1[idx][1] % 12;
            if(pr1[idx][1] === 0){
                pr1[idx][1] = 12;
                pr1[idx][0]--; 
                // 만약 연산으로 인해 유효기간이 2022.24.01이 되었을 때 2024.00.01로 치환된다면 
                // 2024.12.01이 아닌, 2023.12.01이 되기 위해서 해당 연도를 -1 해줘야한다.
            }
        }
    });

    //console.log(today,'vs',pr1); // today와 유효기간 비교하는 로그
    // today와 유효기간들을 비교하여 유효기간이 지난 것들을 분류해 answer에 넣어주기
    pr1.forEach((e, idx) => {
        const temp = today.split(".").map(Number);
        if(e[0] < temp[0]){
            answer.push(idx + 1); // 연도가 today보다 과거일 경우 파기
        } else if(e[0] === temp[0]){
            if(e[1] < temp[1]){
                answer.push(idx +1);  //연도가 같지만 today보다 월자가 과거일 경우 파기
            } else if(e[1] === temp[1]){
                if(e[2] <= temp[2]){
                    answer.push(idx +1); // 연도와 월자가 같지만 일자가 당일 또는 과거일 경우 파기
                }
            }
        } 
    });

    return answer;
}