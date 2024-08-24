/*
시간초과 실패

테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.6MB)
테스트 4 〉	통과 (0.15ms, 33.6MB)
테스트 5 〉	통과 (0.16ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.2MB)
테스트 7 〉	통과 (0.18ms, 33.2MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (0.25ms, 33.5MB)
테스트 10 〉	통과 (0.33ms, 33.7MB)
테스트 11 〉	통과 (1326.60ms, 38.1MB)
테스트 12 〉	통과 (156.16ms, 37.6MB)
테스트 13 〉	통과 (7.31ms, 39.7MB)
테스트 14 〉	통과 (7.38ms, 40.3MB)
테스트 15 〉	통과 (230.22ms, 41.6MB)
테스트 16 〉	통과 (34.02ms, 41.8MB)
테스트 17 〉	통과 (10.73ms, 39.7MB)
테스트 18 〉	통과 (92.50ms, 54.1MB)
테스트 19 〉	통과 (892.56ms, 55.1MB)
테스트 20 〉	통과 (7175.19ms, 56.1MB)
테스트 21 〉	통과 (3093.84ms, 56.4MB)
테스트 22 〉	실패 (시간 초과)
테스트 23 〉	실패 (시간 초과)
테스트 24 〉	실패 (시간 초과)
테스트 25 〉	통과 (0.19ms, 33.4MB)
테스트 26 〉	통과 (0.17ms, 33.6MB)
테스트 27 〉	통과 (0.18ms, 33.4MB)
테스트 28 〉	실패 (시간 초과)
테스트 29 〉	통과 (0.98ms, 36MB)
테스트 30 〉	통과 (5770.59ms, 43.6MB)
*/

function solution(queue1, queue2) {
    let sum1 = 0;
    let sum2 = 0;
    
    queue1.forEach((el) => {
        sum1 += el;
    })
    
    queue2.forEach((el) => {
        sum2 += el;
    })
    
    if((sum1 + sum2) % 2 !== 0) return -1
    
    const middle = (sum1 + sum2) / 2;
    
    let cnt = 0;
    
    while(sum1 !== sum2) {
        if(cnt >= (queue1.length + queue2.length) * 2) return -1;
        
        if(sum1 > sum2) {
            const tmp = queue1.shift();
            sum1 -= tmp;
            queue2.push(tmp);
            sum2 += tmp;
        } else {
            const tmp = queue2.shift();
            sum2 -= tmp;
            queue1.push(tmp);
            sum1 += tmp;
        }
        
        cnt++;
    }
    
    return cnt;
}
