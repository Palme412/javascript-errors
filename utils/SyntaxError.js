try {
    eval('hoo bar');
} catch (e) {
    console.error(e instanceof SyntaxError);
    console.error(e.message);
    console.error(e.name);
    console.error(e.fileName);
    console.error(e.lineNumber);
    console.error(e.columnNumber);
    console.error(e.stack);
}


try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
    console.error(e instanceof SyntaxError); // true
    console.error(e.message);                // Hello
    console.error(e.name);                   // SyntaxError
    console.error(e.fileName);               // someFile.js
    console.error(e.lineNumber);             // 10
    console.error(e.columnNumber);           // 0
    console.error(e.stack);                  // @debugger eval code:3:9
}
