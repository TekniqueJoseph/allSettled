// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
// It rejects when any of the input's promises rejects, with this first rejection reason.

// The Promise. allSettled() method is one of the promise concurrency methods. 
// Promise. allSettled() is typically used when you have multiple asynchronous 
// tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000))
    const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

    Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(e => console.log('the 4th chamber', e))

    // Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    // .catch(e => console.log('the 4th chamber', e))