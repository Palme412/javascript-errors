try {
    throw new URIError('Hello', 'someFile.js', 10)
} catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)              // "Hello"
    console.log(e.name)                 // "URIError"
    console.log(e.fileName)             // "someFile.js"
    console.log(e.lineNumber)           // 10
    console.log(e.columnNumber)         // 0
    console.log(e.stack)                // "@Scratchpad/2:2:9\n"
}

try {
    decodeURIComponent('%')
} catch (e) {
    console.log(e instanceof URIError)  // true
    console.log(e.message)              // "malformed URI sequence"
    console.log(e.name)                 // "URIError"
    console.log(e.fileName)             // "Scratchpad/1"
    console.log(e.lineNumber)           // 2
    console.log(e.columnNumber)         // 2
    console.log(e.stack)                // "@Scratchpad/2:2:3\n"
}

module.exports = { URIError };