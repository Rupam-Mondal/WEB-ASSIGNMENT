function ClassMatches(s) {
    return {
        digits: s.match(/\d/g) || [],
        uppercaseLetters: s.match(/[A-Z]/g) || []
    };
}


const sampleString = "Hello123! World";

const matches = ClassMatches(sampleString);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
