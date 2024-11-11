function solution(price, money, count) {
    let charge = 0;
    for(let i = 1; i <= count; i++){
        charge += price*i;
        console.log("이용요금:",charge,"/ 잔액:",money-charge);
    }    
    if(money >= charge){
        return 0;
    }
    return charge - money;
}