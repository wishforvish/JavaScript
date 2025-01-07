const name = "vishaka"
const repoCOunt = 40

// console.log(name + repoCOunt + "value") -> Outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`);  
//instead use backtick operator `` and ${} for the use of variable


const gameName = new String('vish-gamer')

console.log(gameName[0]);
console.log(gameName.__proto__); // output is {}, which is object but if we see in console of a browser then we will get the prototype(slice, toUpperCase, trim, split, normalise etc..) as the output 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-9,4); // we can use negative value in this slice method
console.log(anotherString);

const newString1 = "    Vish    "
console.log(newString1);
console.log(newString1.trim()); // trim removes white spaces only 

const url = "https://vish.com/vish%20br" 

// the problem is browser does not understand spaces, for eg: "https://vish.com/vish br" so the space is automatically converted by the browser as %20 between vish and br in this example

console.log(url.replace('%20','-')); //replaces %20 with -

console.log(url.includes('vish')); //true
console.log(url.includes('hlo'));  //false

const gameName1 = new String('vish-gamer-com')

//How to convert the above string into array ? 
// split can be based on - for the above example or can be based on anything 

console.log(gameName1.split('-'));





/*
List of JavaScript String Methods

1. length
console.log("Hello, World!".length); // 13

2. toLowerCase()
console.log("Hello, World!".toLowerCase()); // "hello, world!"

3. toUpperCase()
console.log("Hello, World!".toUpperCase()); // "HELLO, WORLD!"

4. trim()
console.log("  Hello, World!  ".trim()); // "Hello, World!"

5. trimStart() / trimLeft()
Removes whitespace only from the start.
console.log("  Hello, World!  ".trimStart()); // "Hello, World!  "

6. trimEnd() / trimRight()
Removes whitespace only from the end.
console.log("  Hello, World!  ".trimEnd()); // "  Hello, World!"

7. includes(substring)
console.log("Hello, World!".includes("World")); // true

8. startsWith(prefix)
console.log("Hello, World!".startsWith("Hello")); // true

9. endsWith(suffix)
console.log("Hello, World!".endsWith("!")); // true

10. indexOf(substring)
console.log("Hello, World!".indexOf("World")); // 7

11. lastIndexOf(substring)
console.log("Hello, World! Hello!".lastIndexOf("Hello")); // 14

12. charAt(index)
console.log("Hello, World!".charAt(7)); // "W"

13. charCodeAt(index)
console.log("Hello, World!".charCodeAt(7)); // 87

14. codePointAt(index)
console.log("😊".codePointAt(0)); // 128522

15. slice(start, end)
console.log("Hello, World!".slice(0, 5)); // "Hello"

16. substring(start, end)
console.log("Hello, World!".substring(7, 12)); // "World"

17. substr(start, length) (deprecated)
console.log("Hello, World!".substr(7, 5)); // "World"

18. replace(search, replacement)
console.log("Hello, World!".replace("World", "Universe")); // "Hello, Universe!"

19. replaceAll(search, replacement)
console.log("Hello, World! Hello!".replaceAll("Hello", "Hi")); // "Hi, World! Hi!"

20. split(separator)
console.log("Hello, World!".split(", ")); // ["Hello", "World!"]

21. concat(string2, ...)
console.log("Hello".concat(", ", "World!")); // "Hello, World!"

22. repeat(count)
console.log("Hello! ".repeat(3)); // "Hello! Hello! Hello! "

23. padStart(targetLength, padString)
console.log("World".padStart(10, "*")); // "*****World"

24. padEnd(targetLength, padString)
console.log("World".padEnd(10, "*")); // "World*****"

25. match(regex)
console.log("Hello, World!".match(/World/)); // ["World"]

26. matchAll(regex)
for (const match of "Hello, World! Hello!".matchAll(/Hello/g)) {
    console.log(match[0]); // "Hello"
}

27. search(regex)
console.log("Hello, World!".search(/World/)); // 7

28. localeCompare(compareString)
console.log("Hello".localeCompare("World")); // -1

29. normalize(form)
console.log("\u1E9B\u0323".normalize("NFC")); // "ẛ̣"

30. valueOf()
const str = new String("Hello");
console.log(str.valueOf()); // "Hello"

31. toString()
const str = new String("World");
console.log(str.toString()); // "World"

32. fromCharCode(code)
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

33. fromCodePoint(code)
console.log(String.fromCodePoint(128522)); // "😊"

34. anchor(name) (deprecated)
console.log("Hello".anchor("world")); // "<a name='world'>Hello</a>"

35. big() (deprecated)
console.log("Hello".big()); // "<big>Hello</big>"

36. blink() (deprecated)
console.log("Hello".blink()); // "<blink>Hello</blink>"

37. bold() (deprecated)
console.log("Hello".bold()); // "<b>Hello</b>"

38. italics() (deprecated)
console.log("Hello".italics()); // "<i>Hello</i>"

39. fixed() (deprecated)
console.log("Hello".fixed()); // "<tt>Hello</tt>"

40. strike() (deprecated)
console.log("Hello".strike()); // "<strike>Hello</strike>"

41. sup() (deprecated)
console.log("Hello".sup()); // "<sup>Hello</sup>"

42. sub() (deprecated)
console.log("Hello".sub()); // "<sub>Hello</sub>"

"Deprecated means that a feature, method, or technology is no longer recommended for use and may be removed in future versions of the programming language, framework, or software. It is still supported in the current version, but relying on it is discouraged because:
Better Alternatives Exist, Outdated Practices, Maintenance and Compatibility"
*/
