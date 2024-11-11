function solution(strings, n) {
  strings.sort();
  strings.sort((a,b)=>{
      return b[n] > a[n] ? -1 : 1;
  })
    return strings;
}