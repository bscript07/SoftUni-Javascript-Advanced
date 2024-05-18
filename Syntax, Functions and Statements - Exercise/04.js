function solve(year, month, day) {
    // Create a new Date object with the given parameters
    let date = new Date(year, month - 1, day);
    
    // Subtract one day (24 hours) from the date
    date.setDate(date.getDate() - 1);
    
    // Extract the year, month, and day from the resulting date
    let previousYear = date.getFullYear();
    let previousMonth = date.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
    let previousDay = date.getDate();
    
    previousMonth = previousMonth < 10 ? '0' + previousMonth : previousMonth;
    previousDay = previousDay < 10 ? '0' + previousDay : previousDay;
    
    return `${previousYear}-${previousMonth}-${previousDay}`;
}

console.log(solve(2015, 5, 10));
