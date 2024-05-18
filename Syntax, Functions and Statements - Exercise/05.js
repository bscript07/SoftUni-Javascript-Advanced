function solve(steps, footprintLength, speedKmH) {

    let totalDistanceMeters = steps * footprintLength;
    let speedMS = speedKmH * 1000 / 3600;
    let walkingTimeSeconds = totalDistanceMeters / speedMS;
    
    // Calculate the number of breaks (1 minute break every 500 meters)
    let numberOfBreaks = Math.floor(totalDistanceMeters / 500);
    let breakTimeSeconds = numberOfBreaks * 60;
    
    let totalTimeSeconds = walkingTimeSeconds + breakTimeSeconds;
    
    // Convert total time to hours, minutes, and seconds
    let hours = Math.floor(totalTimeSeconds / 3600);
    let minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    let seconds = Math.floor(totalTimeSeconds % 60);
    
    // Format the time to ensure leading zeros
    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');
    
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

solve(4000, 0.60, 5);
