function solution(wallpaper) {
    let answer = [];
    
    //초기 좌표를 파일이 존재할 수 없는 공간에 만들어 놓는다.
    let lux = -1;
    let luy = wallpaper[0].length;
    let rdx = -1;
    let rdy = -1;
    
    // 파일이 만들어지는 가장 좌측 minVal과 가장 우측 maxVal 
    let minIdx = -1;
    let maxIdx = -1;
    
    for(let i = 0; i< wallpaper.length; i++){
        minIdx = wallpaper[i].indexOf('#');
        maxIdx = wallpaper[i].lastIndexOf('#');
        
        if(minIdx !== -1){            
            if(lux === -1){
                lux = i;                
            }
            if(luy > minIdx){
                luy = minIdx;
            }             
        }         
        if(maxIdx !== -1){
            rdx = i;
            if(rdy < maxIdx){            
               rdy = maxIdx;
            }
        }        
    }
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx + 1);
    answer.push(rdy + 1);
    return answer;
}