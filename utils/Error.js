// this...
// const x = Error('I was created using a function call!')

// ...has the same functionality as this.
const y = new Error('I was constructed via the "new" keyword!')

try {
    frameworkThatCanThrow();
} catch (err) {
    throw new Error('New error message', { cause: err });
}

