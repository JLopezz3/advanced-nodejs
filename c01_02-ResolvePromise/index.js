//wait for an async operation to complete, then resolve promise. Say operation has completed successfully!
var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

// invoke the delay function
delay(1)
    .then(console.log)
    .then(() => 42)
    .then((number) => console.log(`hello world: ${number}`));

// delay(1)
//     .then((message) => console.log(message));

console.log('end first tick');