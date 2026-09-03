// ## Part 1 — Variables, Arrow Functions, Destructuring, Spread
// ### Exercise 3 — Template Literals
// Rewrite each string using template literals.

const title = "Inception";
const year = 2010;
const rating = 8.8;

// 1.
const label = `Movie: ${title} (${year})`;

// 2. Multi-line string (rewrite without \n concatenation):
const description = `Title: ${title}
Year: ${year}
Rating: ${rating}/10`;


// 3. Expression inside the string:
const summary = `Rating is ${rating >= 8.5 ? "excellent" : "good"}`;

console.log(label);
console.log(description);
console.log(summary);