//>>>>>>>>>>>>>>>>>> Count of codepoints in a UTF-16 string >>>>>>>>>>>>

// UTF-16 is a Unicode encoding. It is used by platforms and protocols such as the Windows API, SMS texts, or the Qt GUI library.
// It is also the internal encoding of strings in several programming languages: JavaScript, languages running on the Java platform (Java, Scala, Kotlin, Clojure...), languages running on the .NET framework (C#, F#, VB.NET, PowerShell...).
// UTF-16 is a variable-length encoding: the representation of a codepoint can require either 1 or 2 16-bit code-units , depending on whether the codepoint is below 
// 2
// 16
// 2 
// 16
// or not.
// The problem
// In languages that use UTF-16 as their string encoding, the function/method/property to retrieve the string's length actually returns the number of code-units in the string, not the number of codepoints.

// For example
// The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.
// '🙉'.length // 2
// Task
// Write a function that returns the number of codepoints in a UTF-16 string.
// "abcd"     --> 4
// "🙉"      --> 1
// "😸🦌🚀" --> 3
// "é"       --> 1 (actual é character)
// "é"       --> 2 (e + combining acute accent)




// Solution >>>>>>>>>>

function getRealLength(string){
    return[...string].length 
    
}


console.log(getRealLength("abcd"))

