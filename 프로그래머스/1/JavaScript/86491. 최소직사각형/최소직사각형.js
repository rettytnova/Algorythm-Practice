function solution(sizes) {
    let arr = [];
    arr = sizes;
    let bigLength = 0;
    let smallLength = 0;
    for(let i =0; i < arr.length; i++){
        let temp = 0;
        if(arr[i][0] < arr[i][1]){
            temp = arr[i][0];
            arr[i][0] = arr[i][1];
            arr[i][1] = temp;
        }
        if(i === 0){
            bigLength = arr[0][0];
            smallLength = arr[0][1];
        }else{
            if(arr[i][0] > bigLength){
                bigLength = arr[i][0];
            }
            if(arr[i][1] > smallLength){
                smallLength = arr[i][1];
            }
        }
    }
    return bigLength * smallLength;
}