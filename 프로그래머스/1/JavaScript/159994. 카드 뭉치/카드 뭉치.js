function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    
    for(let i = 0; i < goal.length; i++){
        if(goal[i] === cards1[cards1Index]){
            cards1Index++;
        }else if(goal[i] === cards2[cards2Index]){
            cards2Index++;
        }else{
            return "No";
        }
    }    
    return "Yes";
}