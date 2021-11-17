function aggregateErrorOne() {
    Promise.any([
        Promise.reject(new Error("some error")),
    ])
        .catch(e) => {
        if (error instanceof aggregateError) {
            // console.log(e instanceof aggregateError); // true
            console.log(e.message);                   // "Hello"
            console.log(e.name);                      // "AggregateError"
            console.log(e.errors);                    // [ Error: "some error" ]
            console.log(e.stack);
        }
    }
}

// Promise.any([
//     Promise.reject(new Error("some error")),
// ]).catch(e => {
//     console.log(e instanceof AggregateError); // true
//     console.log(e.message);                   // "All Promises rejected"
//     console.log(e.name);                      // "AggregateError"
//     console.log(e.errors);                    // [ Error: "some error" ]
// });

module.exports = { aggregateErrorOne };