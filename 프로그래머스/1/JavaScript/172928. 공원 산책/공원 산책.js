function solution(park, routes) {
    var answer = []; // [y,x]를 담은 배열    
    let start = [];  // 출발 지점 좌표 담을 배열
    // 출발 지점 찾기
    for(let i = 0; i < park.length; i++){
        for(let j = 0; j < park[i].length; j++){
            if(park[i][j] === 'S'){
                start.push(i, j);
                break;
            }
        }
        if(start.length){
            break;
        }
    }
    // 길 찾기
    routes.forEach((e) => {                
        const arr = e.split(" ");
        arr[1] = Number(arr[1]);
        
        const temp = [];
        temp.push(start[0]);
        temp.push(start[1]);

        for(let i = 0; i < arr[1]; i++){                        
            switch(arr[0]){
            case 'N':
                start[0]--;             
                break;
            case 'S':
                start[0]++;    
                break;
            case 'W':
                start[1]--;
                break;
            case 'E':
                start[1]++;
                break;
            }
            // 해당 이동이 범위를 벗어나거나 장애물에 도달했다면 해당 명령을 무시 
            if(start[0] < 0 || start[0] >= park.length || 
                start[1] < 0 || start[1] >= park[0].length){
                start = temp;
                break;
            } else if (park[start[0]][start[1]] === 'X'){
                start = temp;
                break;
            }
        }
    })
    return answer = start;
}