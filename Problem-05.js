function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input"
    }
    let sum = 0;
    for(const num of waitingTimes){
        sum = sum + num
    }
    let avg = sum / waitingTimes.length;
    avg = Math.round(avg)
    const before = serialNumber - 1;
    const inSerial = before - waitingTimes.length;
    const remainingWaitingTime = inSerial * avg;

    return remainingWaitingTime
}
