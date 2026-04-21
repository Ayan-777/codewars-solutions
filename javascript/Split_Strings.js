// >>>>>>>>>>>> Split Strings >>>>>>>>>.

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']



// Solution >>>>>>>

function solution(str) {
    if (str.length % 2 !== 0) {
        str += "_"
    }
        let result = [];
        for (let i = 0; i < str.length; i += 2) {
            let c1 = str[i]
            let c2 = str[i + 1]
            result.push(c1 + c2)
        }


    
    return result
}

let test = solution('abcdefg')
console.log(test)
let test1 = solution('abcdef')
console.log(test1)