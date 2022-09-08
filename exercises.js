// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {

    let promise = new Promise((resolve, reject) => {

        // Call the resolve function after ms milliseconds
        setTimeout(() => {
            resolve()
        }, ms)
    })

    return promise
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {

    // Convert the array to a set, thus elminating the duplicate items
    let arrayAsSet = new Set(xs)

    // Turn the set back into an array
    let uniqueItemArray = [...arrayAsSet]

    return uniqueItemArray
}