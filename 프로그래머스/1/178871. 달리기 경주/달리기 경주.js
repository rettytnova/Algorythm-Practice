function solution(players, callings) {
    let answer = [];
    const getRankMap = new Map();
    const getNameMap = new Map();
    // 해당 플레이어들의 이름을 인덱스로 매칭시켜주는 해시테이블, 해당 인덱스만을 갖고 있는 순위테이블 배열을 생성
    players.forEach((e, idx)=> {
        getRankMap.set(e, idx);
        getNameMap.set(idx, e);
    })

    // 이름을 부를 때마다 해쉬 테이블의 value를 바꾸기
    callings.forEach((e)=> {
        const winnerIndex = getRankMap.get(e);         
        const loser = getNameMap.get(winnerIndex - 1);

        // 스왑
        getRankMap.set(loser, winnerIndex);
        getNameMap.set(winnerIndex - 1, e);

        getRankMap.set(e, winnerIndex - 1);        
        getNameMap.set(winnerIndex, loser)

    })
    
    // 두 해시맵 모두 key는 바뀌지 않는다.
    // getNameMap의 key인 rank는 오름차순으로 정렬되어 있으므로 value를 출력하면 된다.
    getNameMap.forEach((val, key, map)=> {
        answer.push(val);
    })
    return answer;
}