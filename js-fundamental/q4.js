const p1 = /[0-9]/;
const p2 = /[a-zA-Z]/;
const p3 = /\s/;

const s1 = "hiibro";
const s2 = "22344";
const s3 = "hello brother";

function checking(s, p) {
    const regex = new RegExp(p);

    const isMatch = regex.test(s);

    if (isMatch) {

        console.log("Matched text:", s.match(regex)[0]);
    } else {
        console.log("No match found.");
    }

    return isMatch;
}

console.log(checking(s1, p1));
console.log(checking(s2, p1));