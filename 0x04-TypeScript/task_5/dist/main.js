function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor',
    };
}
var major1 = { credits: 3, __brand: 'major' };
var major2 = { credits: 4, __brand: 'major' };
console.log('Major:', sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'major' }
var minor1 = { credits: 1, __brand: 'minor' };
var minor2 = { credits: 2, __brand: 'minor' };
console.log('Minor:', sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'minor' }
//# sourceMappingURL=main.js.map