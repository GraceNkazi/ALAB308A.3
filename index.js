// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");

/////////////////////

// Create a Promise that resolves after one second.
//const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("We dit it!");
//     }, 1000);
// });

// Add some then() methods to handle additional tasks.
//myPromise

    // .then((x) => x + ' Again?')
    // .then((x) => x + ' Third time!')
    // .then((x) => x + ' Promises are cool.')
    // .catch((err) => {
    //     console.error(err);
    // })




    // create a new promise "A other exemple"
    const error = true


const myPromise = new Promise((resolve, reject) => {
    if (!error) {

        setTimeout(() => {
            // doing some data fetching....
            resolve('We got some data!!');
        }, 1000);
    } else {
        throw new Error("Error fetching data");
        
    }
});

// myPromise
// .then((data) => console.log(data))
// .catch(error => console.error(error))
// .finally(() => console.log('Done!'));

//add
myPromise1

    .then((x) => x + ' Again?') //fetch user info
    .then((x) => x + ' Third time!') fetch user fav movie
    .then((x) => x + ' Promises are cool.') //games
    .then((x => console.log(x))) //display data on user screen
    .catch((err) => {
        console.error(err);
    })

    constconst
    constcons pro