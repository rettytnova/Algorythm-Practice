function solution(s) {
    let min = '';
    let max = '';
    
    const temp = s.split(" ");
    min = temp[0];
    max = temp[0];
        
    let isMinNegative = false;
    let isMaxNegative = false;
    if(temp[0][0] === '-'){
        isMinNegative = true;
        isMaxNegative = true;
    }
    temp.forEach((e) => {                
        if(e[0] === '-'){            
            //최솟값 비교
            if(!isMinNegative){
                min = e;
                isMinNegative = true;
            } else if (e.length > min.length){
                min = e;                
            } else if (e.length === min.length){
                for(let i = 1; i < e.length; i++){
                    if(e[i] > min[i]){
                        min = e;
                        break;
                    } else if (e[i] < min[i]){
                        break;
                    }
                }
            }                
            
            //최댓값 비교
            if(isMaxNegative){
               if(e.length < max.length)  {
                    max = e;
               } else if(e.length === max.length){
                    for(let i = 1; i < e.length; i++){
                        if(e[i] < max[i]){
                            max = e;
                            break;
                        } else if (e[i] > max[i]){
                            break;
                        }
                    }
               }
            }
        } else {
            //최솟값 비교
            if (!isMinNegative){
                if(e.length < min.length){
                    min = e;
                } else if(e.length === min.length){
                    for(let i = 0; i < e.length; i++){
                        if(e[i] < min[i]){
                            min = e;
                            break;
                        } else if(e[i] > min[i]){
                            break;
                        }
                    }
                }
            }

            //최댓값 비교
            if (isMaxNegative){
                max = e;
                isMaxNegative = false;
            } else {
                if(e.length > max.length){
                    max = e;
                } else if(e.length === max.length){
                    for(let i = 0; i < e.length; i++){
                        if(e[i] > max[i]){
                            max = e;
                            break;
                        } else if(e[i] < max[i]){
                            break;
                        }
                    }
                }
            }
        }
    })    
    return `${min} ${max}`;
}