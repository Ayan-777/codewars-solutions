// List Filtering

// in this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

// Solution>>>>>>>>>>>>> 

function filter_list(l) {
    let result = [];

    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            result.push(l[i])
        }
    }
    return result
}

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]))
