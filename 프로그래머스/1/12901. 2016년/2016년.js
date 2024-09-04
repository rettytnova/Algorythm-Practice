function solution(a, b) {
  let answer = '';
  const monthArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayOfWeekArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const newYearsDay = 5; // FRI = dayOfWeekArray[5];
  let dayNumber = 0;
  for(let i = 0; i < a - 1; i++){ 
      // 2월이면 1월달의 날짜만큼은 더해야하므로 i < 1이 되는것 , a가 2를 입력받으면 1이되어야하므로 a - 1
    dayNumber += monthArray[i];
  }
  dayNumber += newYearsDay + b - 1;
  answer = dayOfWeekArray[dayNumber % 7];
  return answer;
}