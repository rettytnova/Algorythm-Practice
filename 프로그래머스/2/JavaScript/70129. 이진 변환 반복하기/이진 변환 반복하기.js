function solution(s) {
  let changeCount = 0;
  let removeCount = 0;
    
  while (s !== '1') {
    const filteredString = s
      .split('')
      .filter((e) => e === '1')
      .join('');
    removeCount += s.length - filteredString.length;

    const length = filteredString.length;
    s = length.toString(2);
    changeCount++;
  }
    
  return [changeCount, removeCount];
}