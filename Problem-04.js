function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input"
    }

    let parentProfession = 0;
    if (obj.isFFamily === true) {
        parentProfession = 20;
    }
    else{
        parentProfession = 0;
    }
    const finalScore = obj.testScore + obj.schoolGrade + parentProfession;
    if (finalScore >= 80) {
        return true
    }
    else{
        return false
    }
}
