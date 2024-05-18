function solution(n) {
    const initial = n;

    return function func(n) {
        return initial + n;
    }
    
}